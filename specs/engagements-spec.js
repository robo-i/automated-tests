const LoginPage = require('../pages/login-page');
const NavigationPage = require('../pages/navigation-page');
const DataManagementPage = require('../pages/data-management-page');
const EngagementsPage = require('../pages/engagements-page');
const NewEngagementPage = require('../pages/new-engagement-page');
const AudiencesPage = require('../pages/audiences-page');
const NewAudiencePage = require('../pages/new-audience-page');
const utils = require('../utils/common-utils');
const rest = require('../utils/rest-utils');
const uuid = require('uuid/v1');

describe('Engagement visit flow: ', () => {
    const loginPage = new LoginPage();
    const navigationPage = new NavigationPage();
    const dataManagementPage = new DataManagementPage();
    const engagementsPage = new EngagementsPage();
    const newEngagementPage = new NewEngagementPage();
    const audiencesPage = new AudiencesPage();
    const newAudiencePage = new NewAudiencePage();

    beforeAll(() => {
        browser.waitForAngularEnabled(true);

        return loginPage.login();
    });

    it('visit newly added engagement by its audience and check the visit', async () => {
        const engagementName = utils.generateAlphaNumericString();
        const engagementDescription = 'Bulgarian tomatoes';
        const audienceName = utils.generateAlphaNumericString();
        const audienceDescription = 'Tomato audience description';
        const randomUuid = uuid();

        await navigationPage.openDataManagement();
        await dataManagementPage.openEngagements();
        await engagementsPage.clickOnNewEngagementButton();
        await newEngagementPage.setEngagementName(engagementName);
        await newEngagementPage.setEngagementDescription(engagementDescription);
        await newEngagementPage.clickOnSaveButton();
        await utils.wait();
        await dataManagementPage.openAudiences();
        await audiencesPage.clickOnNewAudienceButton();
        await newAudiencePage.setAudienceName(audienceName);
        await newAudiencePage.setAudienceDescription(audienceDescription);
        await utils.wait();
        await newAudiencePage.dragAndDropEngagementIntoRuleArea(engagementName);
        await newAudiencePage.clickOnNextButton();
        await newAudiencePage.clickOnNextButton();
        await newAudiencePage.clickOnNextButton();

        const apiIdentifier = await newAudiencePage.getApiIdentifier();

        await rest.visitEngagement(randomUuid, engagementName);

        const visitCheckResponse = await rest.checkUsersVisit(randomUuid);

        console.log('BODY: ', visitCheckResponse);
        expect(await visitCheckResponse.length).toBe(1);
        expect(await visitCheckResponse[0].segmentName).toBe(apiIdentifier);
    });
});

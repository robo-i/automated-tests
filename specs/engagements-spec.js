const LoginPage = require('../pages/login-page');
const NavigationPage = require('../pages/navigation-page');
const DataManagementPage = require('../pages/data-management-page');
const EngagementsPage = require('../pages/engagements-page');
const NewEngagementPage = require('../pages/new-engagement-page');
const AudiencesPage = require('../pages/audiences-page');
const NewAudiencePage = require('../pages/new-audience-page');
const utils = require('../utils/common-utils');

describe('Engagement flow: ', () => {
    const loginPage = new LoginPage();
    const navigationPage = new NavigationPage();
    const dataManagementPage = new DataManagementPage();
    const engagementsPage = new EngagementsPage();
    const newEngagementPage = new NewEngagementPage();
    const audiencesPage = new AudiencesPage();
    const newAudiencePage = new NewAudiencePage();

    beforeAll(async () => {
        browser.waitForAngularEnabled(true);

        await loginPage.login('relay42test1@gmail.com', 'relay42test');
    });

    it('add an engagement and its audience', async () => {
        const engagementName = 'Tomato' + utils.generateAlphaNumericString();
        const engagementDescription = 'Bulgarian tomatoes';
        const audienceName = 'Tomato audience';
        const audienceDescription = 'Tomato audience description';

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
        await newAudiencePage.dragAndDropEngagementIntoRuleArea('jb');
        await newAudiencePage.clickOnNextButton();
        await newAudiencePage.clickOnNextButton();
        await newAudiencePage.clickOnNextButton();


    });
});

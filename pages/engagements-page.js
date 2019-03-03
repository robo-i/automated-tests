const utils = require('../utils/common-utils');
const NavigationPage = require('./navigation-page');

class EngagementsPage extends NavigationPage {

    constructor() {
        super();
        this.newEngagementButton = $('.t-create');
        this.newEngagementNameInput = $('#type');
    }

    clickOnNewEngagementButton() {
        try {
            return this.newEngagementButton.click();
        } catch (error) {
            // catching StaleElementException
            return utils.waitForElementToBeDisplayed(this.newEngagementNameInput);
        }
    }
}

module.exports = EngagementsPage;



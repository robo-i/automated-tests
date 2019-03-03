const utils = require('../utils/common-utils');
const NavigationPage = require('./navigation-page');

class EngagementsPage extends NavigationPage {

    constructor() {
        super();
        this.newEngagementButton = $('.t-create');
        this.newEngagementNameInput = $('#type');
    }

    clickOnNewEngagementButton() {
        return utils.waitForElementToBeDisplayed(this.newEngagementButton)
            .then(() => this.newEngagementButton.click())
            .then(() => utils.waitForElementToBeDisplayed(this.newEngagementNameInput));
    }
}

module.exports = EngagementsPage;



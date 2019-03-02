const NavigationPage = require('./navigation-page');

class EngagementsPage extends NavigationPage{

    constructor() {
        super();
        this.newEngagementButton = $('.t-create');
    }

    clickOnNewEngagementButton() {
        return this.newEngagementButton.click();
    }
}

module.exports = EngagementsPage;



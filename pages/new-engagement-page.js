const utils = require('../utils/common-utils');
const NavigationPage = require('./navigation-page');

class NewEngagementPage extends NavigationPage{

    constructor() {
        super();
        this.name = $('#type');
        this.description = $('#description');
        this.save = $('button[type="submit"]');
    }

    setEngagementName(name) {
        return utils.typeText(this.name, name);
    }

    setEngagementDescription(description) {
        return utils.typeText(this.description, description);
    }

    clickOnSaveButton() {
        return this.save.click();
    }
}

module.exports = NewEngagementPage;

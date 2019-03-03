const NavigationPage = require('./navigation-page');

class AudiencesPage extends NavigationPage {
    constructor() {
        super();
        this.newAudienceButton = $('button[data-ui-sref="site.profiles.segments.add"]');
    }

    clickOnNewAudienceButton() {
        return this.newAudienceButton.click();
    }
}

module.exports = AudiencesPage;

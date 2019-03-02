const NavigationPage = require('./navigation-page');

class DataManagementPage extends NavigationPage {
  constructor() {
    super();
    this.audiences = element(by.id('r42-profiles-selections'));
    this.engagements = $('#r42-profiles-engagements');
  }

  openEngagements() {
    return this.engagements.click();
  }

  openAudiences() {
    return this.audiences.click();
  }
}

module.exports = DataManagementPage;

class NavigationPage {

    constructor() {
        this.dataManagement = $('#r42-profiles');
    }

    openDataManagement() {
        return this.dataManagement.click();
    }
}

module.exports = NavigationPage;


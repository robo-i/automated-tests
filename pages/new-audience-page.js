const utils = require('../utils/common-utils');
const NavigationPage = require('./navigation-page');
const dragAndDrop = require('html-dnd').code;

class NewAudiencePage extends NavigationPage {

    constructor() {
        super();
        this.name = $('#segment-name');
        this.description = $('#segment-description');
        this.next = $('a[data-click-and-wait="handleNext"]');
        this.ruleArea = $('#dropTargetAnd');
    }

    setAudienceName(name) {
        return utils.typeText(this.name, name);
    }

    setAudienceDescription(description) {
        return utils.typeText(this.description, description);
    }

    clickOnNextButton() {
        return this.next.click();
    }

    dragAndDropEngagementIntoRuleArea(engagementName) {
        const engagement = $(`li a[data-name='${engagementName}']`);

        return browser.driver.executeScript(dragAndDrop, engagement.getWebElement(), this.ruleArea.getWebElement());
    }
}

module.exports = NewAudiencePage;




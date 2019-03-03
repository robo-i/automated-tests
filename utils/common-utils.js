module.exports = {
    typeText(element, text) {
        return element.clear()
            .then(() => element.sendKeys(text));
    },

    getElementText(css) {
        return element(by.css(css)).getText();
    },

    dropDownOptionByText(optionText) {
        return element(by.cssContainingText('option', optionText)).click();
    },

    generateAlphaNumericString() {
        return Math.random().toString(36).substring(2, 15);
    },

    wait(timeout = 3) {
        return browser.sleep(timeout * 1000);
    },

    waitForElementToBeDisplayed(elem, timeoutInterval = 7 * 1000) {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), timeoutInterval, `Element did not appear in ${timeoutInterval / 1000} seconds`);
    },
};

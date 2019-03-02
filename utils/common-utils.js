module.exports = {
    typeText(element, text) {
        return element.clear()
            .then(() => element.sendKeys(text));
    },

    getElementText(css) {
        return element(by.css(css)).getText();
    },

    selectEntityWithText(cssSelector, text) {
        return element(by.cssContainingText(cssSelector, text)).click();
    },

    dropDownOptionByText(optionText) {
        return element(by.cssContainingText('option', optionText)).click();
    },

    isEntityWithTextPresent(cssSelector, text) {
        return element(by.cssContainingText(cssSelector, text)).isPresent();
    },

    selectEntityWithText(cssSelector, text) {
        return element(by.cssContainingText(cssSelector, text)).click();
    },

    generateAlphaNumericString() {
        return Math.random().toString(36).substring(2, 15);
    },

    extendObject(baseObject = {}, additionalObject) {
        return Object.assign(baseObject, additionalObject);
    },

    refreshPage() {
        return browser.refresh();
    },

    wait(timeout = 2) {
        return browser.sleep(timeout * 1000);
    },
};

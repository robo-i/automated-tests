const randomstring = require("randomstring");

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

    generateRandomString() {
        return 'a' + randomstring.generate({
            length: 8,
            charset: 'alphabetic'
        });
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

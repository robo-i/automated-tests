module.exports = {
    browserName: 'chrome',
    chromeOptions: {
        args: [
            '--headless',
            '--disable-gpu',
            '--no-sandbox'
        ]
    },
    loggingPrefs: {
        browser: 'ALL'
    }
};

const envArgs = require('minimist')(process.argv);
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
const TIMEOUT_INTERVAL = 60 * 1000;

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    suites: {
        all: ['./specs/*-spec.js'],
        engagements: ['./specs/engagements-spec.js']
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: TIMEOUT_INTERVAL,
        showColors: true,
        print() {
        }
    },
    getPageTimeout: TIMEOUT_INTERVAL,
    allScriptsTimeout: TIMEOUT_INTERVAL,
    SELENIUM_PROMISE_MANAGER: false,

    onPrepare() {
        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true
                }
            }));

        jasmine.getEnv().addReporter(
            new PrettyReporter({
                path: './report',
                screenshotOnPassed: true
            }));

        browser.waitForAngularEnabled(false);

        return browser.get('/');
    }
};

exports.config.capabilities = require(`./configs/${envArgs.browser}`);

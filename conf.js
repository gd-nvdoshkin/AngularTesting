// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: ["es2015"]
});

exports.config = {
    directConnect: true,
    chromeDriver: '/Users/nvdoshkin/Downloads/chromedriver 2',
    useAllAngular2AppRoots: true,
    specs: ['e2e/*.js'],
    framework: 'jasmine2',

    onPrepare: () => {
        const SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    },

    baseUrl: "http://localhost:4200",
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        print: () => {
        },
        defaultTimeoutInterval: 50000
    }
};
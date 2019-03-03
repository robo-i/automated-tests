**Steps to follow in order to run automated tests**

1. Install Node.js
2. Install gulp by executing the command:
> npm i gulp -g
3. Download dependencies by running the following command from the project root folder:
> npm i
4. Specify valid login credentials in the login.properties file
5. If you want to disable headless chrome, comment out --headless in protractor.conf.js file.
   Run tests with the following command from the project root folder:
> gulp

Note: test run is customazable, it's possible to run a specific suite of tests in headless chrome or firefox
on a certain environment (testing/staging/production).<br/>
If other environment isn't explicitly specified, the provided test environment is used by default.<br/>
If browser isn't specified, chrome is set by default.<br/>
If no suite is specified, all are run by default.<br/>
Example:<br/>
> gulp --suite=engagements --browser=firefox --frontendUrl=https://test.env.com

Generated report can be found in ./tmp/report.html and screenshots in ./tmp/reports/img
const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const envArgs = require('minimist')(process.argv);
const gulpProtractor = require('gulp-protractor').protractor;
const webDriverUpdate = require('gulp-protractor').webdriver_update;

gulp.task('default', ['test']);

gulp.task('test', ['create-report-dir', 'delete-report'], () => {
    return gulp.src('')
        .pipe(gulpProtractor({
            configFile: 'protractor.conf.js',
            args: [
                '--baseUrl', envArgs.frontendUrl || 'https://admin.relay42.com',
                '--suite', envArgs.suite || 'all',
                '--browser', envArgs.browser || 'chrome'
            ]
        }));
});

gulp.task('delete-report', () => {
    return del(['./report']);
});

gulp.task('create-report-dir', () => {
    if (!fs.existsSync('./report')) {
        fs.mkdirSync('./report');
    }
});

gulp.task('webdriver-update', (done) => webDriverUpdate(done));

const config = require('./config');
const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const envArgs = require('minimist')(process.argv);
const gulpProtractor = require('gulp-protractor').protractor;

gulp.task('default', ['test']);

gulp.task('test', ['create-tmp-dir', 'delete-reports'], () => {
    return gulp.src('')
        .pipe(gulpProtractor({
            configFile: 'protractor.conf.js',
            args: [
                '--baseUrl', envArgs.frontendUrl || config.frontendUrl,
                '--suite', envArgs.suite || 'all'
            ]
        }));
});

gulp.task('delete-reports', () => {
    return del(['./tmp/reports']);
});

gulp.task('create-tmp-dir', () => {
    if (!fs.existsSync('./tmp')) {
        fs.mkdirSync('./tmp');
    }
});

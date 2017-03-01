const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');
const cp = require('child_process');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build jekyll
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
    .on('close', done);
});

// Rebuild jekyll
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

// Compiles Sass
gulp.task('sass', function () {
  return gulp.src('assets/styles/main.sass')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 9'], { cascade: true }))
    .pipe(cssnano({
      autoprefixer: false
    }))
    .pipe(gulp.dest('_site/assets/styles'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/styles/'));
});

// Compiles Scripts
gulp.task('js', function () {
  return gulp.src('assets/scripts/main.js')
    .pipe(rename('main.pack.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/scripts'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/scripts/'));
});

// Start server and watch
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });

  gulp.watch('assets/styles/**/*.sass', ['sass']);
  gulp.watch(['*.html', '*.md', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
  gulp.watch(['assets/scripts/**/*', '!assets/scripts/*.pack.js'], ['js']);
});

// Run all things
gulp.task('default', ['browser-sync']);

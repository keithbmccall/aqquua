const gulp = require("gulp");
// const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cssMin = require("gulp-css");

gulp.task("css", () => {
  gulp
    .src(["./public/styles/css/index.css"])
    .pipe(concat("index.css"))
    .pipe(cssMin())
    .pipe(gulp.dest("./public/styles/css"));
});

gulp.task("default", ["css"]);

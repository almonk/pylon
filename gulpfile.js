var postcss = require("gulp-postcss");
var gulp = require("gulp");
var fs = require("fs");
var atImport = require("postcss-import");
var cssnano = require("cssnano");
var cssvariables = require("postcss-css-variables");

gulp.task("pylon", function() {
  var plugins = [atImport, cssnano, cssvariables];

  return gulp
    .src("./src/pylon.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./css"))
    .pipe(gulp.dest("./docs/pylon"));
});

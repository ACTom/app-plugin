const gulp = require("gulp"),
  livereload = require("gulp-livereload"),
  del = require("del"),
  run = require("run-sequence"),
  connect = require("gulp-connect"),
  typescript = require("gulp-tsc");

gulp.task("clean-dist", () => {
  return del(["dist/**/*"], { force: true });
});

gulp.task("compile", function() {
  return gulp
    .src(["./app/src/**/*.ts"])
    .pipe(
      typescript({
        sourceMap: true,
        target: "ES2015",
        module: "commonjs"
      })
    )
    .pipe(gulp.dest("./dist/"));
});


gulp.task("copy-html-vendor", function() {
  gulp.src("./app/static/index.html").pipe(gulp.dest("dist"));
});

gulp.task("webserver", function() {
  connect.server({ port: 8848 });
});

gulp.task("default", function(done) {
  run(
    "clean-dist",
    "compile",
    "copy-html-vendor",
    done
  );
});

gulp.task("watch", function() {
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(["dist/**"]).on("change", livereload.changed);
});

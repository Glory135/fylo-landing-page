const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purge = require("gulp-purgecss");

const cssCompiler = () => {
  return src("index.scss")
    .pipe(sass())
    .pipe(purge({ content: ["index.html"] }))
    .pipe(dest("css"));
};

const watcher = () => {
  watch(["index.scss", "index.html"], cssCompiler);
};

exports.default = series(cssCompiler, watcher);

;(function(){
    const gulp = require("gulp");
    const del = require("del");
    const tsc = require ("gulp-typescript");
    const sourcemaps = require("gulp-sourcemaps");
    const tsProject = tsc.createProject("tsconfig.json");
    const tslint = require("gulp-tslint");

    /**
     * Remove build directory
     */
    gulp.task('clean', (cb) => {
        return del(["build"], cb);
    });

    /**
     * Compile typescript sources and create sourcemaps in build directory
     */
    gulp.task("compile", () => {
        var tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
        return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
    });

    /**
     * Copy all resources that are not typescript files into build directory
     */
    gulp.task("resources", () => {
        return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"))
    });

    /**
     * Copy all required libraries into build directory
     */
    gulp.task("libs", () => {
        return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'bootstrap/dist/css/bootstrap.min.css',
            'bootstrap/dist/js/bootstrap.min.js',
            'tether/dist/js/tether.min.js',
            'jquery/dist/jquery.min.js',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"})
        .pipe(gulp.dest("build/lib"));
    });

    /**
     * Watch for changes in Typescript, HTML, and CSS Files
     */
    gulp.task('watch', () => {
        gulp.watch(["src/**/*.ts"], ["compile"]).on('change', (e) => {
            console.log("Typescript file " + e.path + " has been changed. Compiling.");
        });
        gulp.watch(["src/**/*.html", "src/**/*.css"], ["resources"]).on('change', (e) => {
            console.log('Resource file ' + e.path + ' has been changed. Updating.');
        });
    });

    /**
     * Build the project
     */
    gulp.task("build", ["compile", "resources", "libs"], () => {
        console.log("Building the project ...")
    });
}());
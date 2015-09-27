module.exports = function (grunt) {

    //js libs root path
    var jsLibSrcPath = 'src/main/webapp/resources/lib';
    var jsLibDstPath = 'src/main/webapp/resources/release/js';
    var destLibJsName = 'libs.js', destLibJsMinName = 'libs.min.js';

    //js angular-app root path
    var jsAppSrcPath = 'src/main/webapp/resources/dev/js/angular-app';
    var jsAppDstPath = 'src/main/webapp/resources/release/js';
    var destAppJsName = 'angular-app.js', destAppJsMinName = 'angular-app.min.js';

    //css root path
    var cssLibSrcPath = 'src/main/webapp/resources/lib/css';
    var cssLibDstPath = 'src/main/webapp/resources/release/css';
    var destLibCssName = 'styles.css', destLibCssMinName = 'styles.min.css';

    //css custom styles path
    var cssCustomSrcPath = 'src/main/webapp/resources/dev/css';

    //libs files to concat
    var jsLibFilesPath = [
        //jquery first
        jsLibSrcPath + '/jquery.min.js',
        jsLibSrcPath + '/bootstrap.min.js',
        jsLibSrcPath + '/angular.min.js',
        jsLibSrcPath + '/dependencies/*.js'
    ];

    //app files to concat
    var jsAppFilesPath = [
        jsAppSrcPath + '/**/*.js'
        //jsAppSrcPath + '/',
    ];

    //css files to concat
    var cssFilesPath = [
        cssLibSrcPath + '/*.css',
        cssCustomSrcPath + '/custom.css',
        cssLibSrcPath + '/custom.css'
    ];

    //------------------------------------------------------------
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------

        //----- concat begin -----
        concat: {
            js: {
                options: {
                    separator: ';\n'
                },
                files: [
                    //js lib files
                    {
                        src: jsLibFilesPath,
                        dest: jsLibDstPath + '/' + destLibJsName
                    },
                    //js angular-app files
                    {
                        src: jsAppFilesPath,
                        dest: jsAppDstPath + '/' + destAppJsName
                    }
                ]
            }
        },

        //----- concat end -----

        //----- uglify begin -----
        uglify: { // Task uglify
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                mangle: {
                    except: ['jquery.min.js', 'bootstrap.min.js', 'angular.min.js']
                },
                compress: {
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true
                }
            },
            js: { // Target
                files: [
                    //js lib files
                    {

                        src: [jsLibDstPath + '/' + destLibJsName],
                        dest: jsLibDstPath + '/' + destLibJsMinName
                    },
                    //js angular-app files
                    {

                        src: [jsAppDstPath + '/' + destAppJsName],
                        dest: jsAppDstPath + '/' + destAppJsMinName
                    }
                ]
            }
        },
        //----- uglify end -----

        //----- cssmin begin -----
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            },
            concat_css: {
                files: [
                    {
                        src: cssFilesPath,
                        dest: cssLibDstPath + '/' + destLibCssName
                    }
                ]
            },
            minify_css: {
                files: [
                    {
                        src: [cssLibDstPath + '/' + destLibCssName],
                        dest: cssLibDstPath + '/' + destLibCssMinName
                    }
                ]
            }
        }
        //----- cssmin end -----
    });
    //init plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //register tasks
    //js
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('minify-js', ['uglify:js']);
    grunt.registerTask('process-all-js', ['concat-js', 'minify-js']);
    //css
    grunt.registerTask('concat-css', ['cssmin:concat_css']);
    grunt.registerTask('minify-css', ['cssmin:minify_css']);
    grunt.registerTask('process-all-css', ['concat-css', 'minify-css']);
    //final task
    grunt.registerTask('compress-all', ['process-all-js', 'process-all-css']);
};
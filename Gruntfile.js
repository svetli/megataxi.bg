module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    'js/app.js': [
                        'src/js/**/*.js'
                    ]
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'css',
                    environment: 'development'
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['browserify']
            },
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['compass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify', 'compass']);
};

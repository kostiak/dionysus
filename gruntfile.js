module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'server.js', 'server/*.js', 'server/**/*.js', 'config/*.js', 'src/scripts/*.js', 'src/scripts/**/*.js']
        },
        copy: {
            html: {
                src: 'src/index.html',
                dest: 'public/index.html'
            },
            partials: {
                expand: true,
                cwd: 'src/partials/',
                src: '**',
                dest: 'public/partials/',
                flatten: true,
                filter: 'isFile'
            },
            fonts: {
                expand: true,
                cwd: 'src/bower_components/fontawesome/fonts/',
                src: '**',
                dest: 'public/fonts/',
                flatten: true,
                filter: 'isFile'
            }
        },
        useminPrepare: {
            html: 'src/index.html',
            options: {
                root: 'src',
                dest: 'public',
                flow: {
                    steps: {
                        clear: [],
                        jsv: ['concat'],
                        js: ['concat', 'uglifyjs'],
                        css: ['concat', 'cssmin']
                    },
                    post: {}
                }
            }
        },
        ngtemplates: {
            dionysusApp: {
                cwd: 'src',
                src: 'partials/*.html',
                dest: '.tmp/template.js',
                options: {
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true,
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    },
                    usemin: 'scripts/dist.min.js'
                }
            }
        },
        usemin: {
            html: 'public/index.html',
            options: {
                blockReplacements: {
                    jsv: function (block) {
                        return '<script src="' + block.dest + '"></script>';
                    }
                }
            }
        },
        watch: {
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['src/index.html', 'src/partials/*.html'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['src/styles/*.css'],
                options: {
                    livereload: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    env: {
                        PORT: '9000',
                        DEV: 'true'
                    }
                }
            }
        },
        shell: {
            mongod: {
                command: 'mongod --dbpath ./data'
            },
            server: {
                command: 'node server.js'
            }
        },
        concurrent: {
            dev: {
                tasks: ['shell:mongod', 'nodemon:dev', 'watch'],
                options: {
                    logConcurrentOutput: true,
                    limit: 4
                }
            },
            dist: {
                tasks: ['shell:mongod', 'shell:server'],
                options: {
                    logConcurrentOutput: true,
                    limit: 4
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-shell');

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.loadNpmTasks('grunt-usemin');


    grunt.registerTask('default', ['concurrent:dev']);
    grunt.registerTask('server', ['concurrent:dist']);
    grunt.registerTask('only-build', [
        'copy:html',
        'copy:fonts',
        'useminPrepare',
        'ngtemplates',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin'
    ]);
    grunt.registerTask('build', ['only-build', 'server']);

};

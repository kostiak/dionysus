module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'server.js', 'app/*.js', 'app/**/*.js', 'config/*.js']
        },
        watch: {
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            ejs: {
                files: ['views/*.ejs'],
                options: {
                    livereload: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        shell: {
            mongod: {
                command: 'mongod --dbpath ./data'
            }
        },
        concurrent: {
            dev: {
                tasks: ['shell', 'nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true,
                    limit: 4
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['concurrent']);
};

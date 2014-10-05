module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			// define the files to lint
			files: ['gruntfile.js', 'app/**/*.js'],

			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				ignores: ['app/lib/*.js'],
				// more options here if you want to override JSHint defaults
				globals: {
					jquery: false,
					require: true,
					console: true,
					module: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			express: {
				files:  [ 'app/**/*.js', 'app/**/*.html', 'app/**/*.css' ],
				tasks:  [ 'express:dev' ],
				options: {
					spawn: false
				}
			}
		},

		express: {
			options: {
				// Override defaults here
			},
			dev: {
				options: {
					script: 'server/server.js'
				}
			}
		},

		open : {
			dev: {
				path: 'http://127.0.0.1:3000'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('build', [
		'jshint',
		'watch'
	]);

	grunt.registerTask('server', [
		'express:dev',
		'open:dev',
		'watch'
	]);

	grunt.registerTask('default', [
		'jshint',
	 	'watch'
	]);
};
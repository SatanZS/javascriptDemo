module.exports = function(grunt) {


	grunt.initConfig({//init config
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			haha: ['Gruntfile.js',
				'src/**/*.js'
			],
			options: {//dont rename
				globals:{
					$:false,
					jQuery:false
				},
				browser: true,            // browser environment
				devel: true                // 
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');//load pluge


	//grunt.registerTask('default', ['jshint']);

};
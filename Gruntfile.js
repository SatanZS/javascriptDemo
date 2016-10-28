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
		},
		copy:{
			main:{
				expand:true,
				cwd:"src/",
				src:"**/*.js",
				dest:"build/"

			}
		},
		concat:{
			js:{
				src:"src/**/*.js",
				dest:"build/"+"<%=pkg.name%>.js"
			}
		},
		clean:{
			build:['build/**']
		},
		connect:{
			options:{
				hostname:"*",//localhost
				port:9000,
				livereload:34805
			},
			server:{
				options:{
					open:true,
					base:[
						'src'
					]
				}
			}
		},
		watch:{
			liverload:{
				options:{
					livereload:"<%= connect.options.livereload %>"
				},
				files:[
					'src/*.html',
					'src/style/**/*css',
					'src/js/**/*.js'
				]
			},
			wjs:{
				options:{
					livereload:true
				},
				files:["src/js/**/*.js"],
				tasks:["clean"]
			}
		},
		uglify:{
			minjs:{
				options: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> mill createit*/'
    },
				files:[
					{
						expand:true,
						cwd:"src/",
						src:["**/*.js"],
						dest:'build/',
						ext:".min.js"
					}
				]
			}
		},
		qunit:{
			all:[
				"test/**/*.html"
			]
		}
	});
	//load pluge
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-qunit');


	grunt.registerTask('js', ['jshint',"copy"]);
	grunt.registerTask('default', ['connect',"watch:liverload"]);

};
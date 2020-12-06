module.exports = function ( grunt ) {
	// Project configuration.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','autoprefixer','cssmin'],
				options: {
					livereload: true,
				}
			},
			js: {
				files: 'js/*.js',
				tasks: ['terser'],
				options: {
					livereload: true,
				}
			},
			webp: {
				files: 'assets/**/*.{png,jpg,gif}',
				tasks: ['cwebp'],
			}
		},
		terser: {
			options: {
				mangle: {
					toplevel: true,
				},
			},
			build: {
				files: [
					{
						expand: true,
						src: [ 'js/*.js', '!js/*.min.js' ],
						ext: '.min.js',
					},
				],
			},
		},
		sass: {
			dist: {
				files: {
					'css/style.css': 'sass/style.scss',
				},
			},
		},
		autoprefixer: {
			options: {},
			your_target: {
				files: [
					{
						expand: true,
						src: [
							'css/style.css',
							'!**/*.min.css',
							'!css/*.min.css',
						],
						ext: '.css',
					},
				],
			},
		},
		cssmin: {
			options: {},
			targets: {
				files: [
					{
						expand: true,
						src: [
							'css/style.css',
							'!**/*.min.css',
						],
						ext: '.min.css',
					},
				],
			},
		},
		cwebp: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'assets/img/',
						src: [ '**/*.{png,jpg,gif}' ],
						dest: 'assets/img/',
					},
				],
			},
		},
		browserSync: {
			bsFiles: {
				src : [
					'css/*.min.css',
					'js/*.min.js',
					'*.html'
				]
			},
			options: {
				watchTask: true,
				server: './',
			}
        },
	} );

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-terser' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-cwebp' );
	grunt.loadNpmTasks( 'grunt-browser-sync' );

	// Default task(s).
	grunt.registerTask( 'default', [
		'browserSync',
		'watch',
		// 'terser',
		// 'sass',
		// 'autoprefixer',
		// 'cssmin',
		// 'cwebp',
	] );
};

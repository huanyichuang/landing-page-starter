module.exports = function ( grunt ) {
	// Project configuration.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
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
	} );

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks( 'grunt-terser' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-cwebp' );

	// Default task(s).
	grunt.registerTask( 'default', [
		'terser',
		'sass',
		'autoprefixer',
		'cssmin',
		'cwebp',
	] );
};

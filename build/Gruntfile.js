module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    zip: {
      '../presentation.zip': ['slide-deck.html']
    },
    copy: {
      build: {
        expand: true,
        cwd: 'build/',
        src: '**',
        dest: '../presentation',
      },
      reveal_js: {
        expand: true,
        cwd : 'bower_components/reveal.js/',
        src: ['**/*.js','!Gruntfile.js'],
        dest: '../build/assets/scripts/',
        flatten: true
      },
      reveal_css: {
        expand: true,
        cwd : 'bower_components/reveal.js/css/',
        src: ['print/*.css','pdf/*.css','reveal.scss','theme/source/**.*','theme/template/**.*'],
        dest: '../build/assets/sass/vendor/reveal/'
      },
      reveal_font: {
        expand: true,
        cwd : 'bower_components/reveal.js/',
        src: ['font/'],
        dest: '../build/assets/fonts/',
        flatten: true
      },
    },
    clean: {
      dist: {
        src: [ '../dist/assets/', '!assets/' ],
        options: {
          force: true
        }
      },
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          // 'destination': 'source'
          '../dist/assets/main.css': 'assets/sass/styles.scss',
          '../dist/styles/reveal.css': 'assets/sass/vendor/reveal/reveal.scss',
          '../dist/styles/paper.css': 'assets/sass/vendor/reveal/print/paper.css',
          '../dist/styles/pdf.css': 'assets/sass/vendor/reveal/print/pdf.css',
          '../dist/styles/black.css': 'assets/sass/vendor/reveal/theme/source/black.scss',
        }
      }
    },
    autoprefixer: {
      dist: {
        // apply prefixes to distribution assets
        expand: true,
        cwd: '../dist/',
        src: [ '**/*.css' ],
        dest: '../dist/'
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        options: {                       // Target options
          optimizationLevel: 3,
        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'assets/img/',            // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: '../dist/images/'        // Destination path prefix
        }]
      },
      trial: {                         // Another target
        options: {                       // Target options
          optimizationLevel: 7
        },
        files: {
          '../dist/images/library.png' : 'assets/img/ottawa/library.png'
        }
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['**/*.scss'],
        tasks: ['sass','autoprefixer'],
      },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: { livereload: true },
        files: ['dest/**/*'],
      },
    },
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-zip');

  // Register tasks
  grunt.registerTask(
    'stylesheets',
    'Compiles the stylesheets.',
    [ 'sass','autoprefixer' ]
  );

  grunt.registerTask(
    'copy:assets',
    'Copy and flatten all vendor assets into dist directory.',
    [ 'copy:reveal_js','copy:reveal_css', 'copy:reveal_font' ]
  );

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    [ 'clean:dist','copy:assets', 'stylesheets' ]
  );

  grunt.registerTask('default', ['watch']);

// .module
};

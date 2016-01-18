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
      }
    },
    clean: {
      build: {
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
          '../dist/assets/main.css': 'assets/sass/styles.scss',       // 'destination': 'source'
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
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-zip');

  // Register tasks
  grunt.registerTask(
    'stylesheets',
    'Compiles the stylesheets.',
    [ 'sass','autoprefixer' ]
  );
  grunt.registerTask('default', ['stylesheets']);
  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    [ 'clean:build', 'stylesheets' ]
  );

// .module
};

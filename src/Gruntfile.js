module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    zip: {
      '../presentation.zip': ['slide-deck.html']
    },
    copy: {
      main: {
        expand: true,
        cwd: 'presentation/',
        src: '**',
        dest: '../',
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-zip');

// .module
};
module.exports = function(grunt) {
  
  grunt.initConfig({

  sass: {
      dist: {
        options: {
            sourcemap: true
        },
        files: {
            'assets/css/main.css': 'sass/main.scss'
        }
      }
  },
  cssmin: {
     dist: {
        options: {
           banner: '/*! My Project | Lee Easeman */'
        },
        files: {
           'assets/css/main.min.css': ['assets/css/main.css']
        }
    }
  },
  uglify: {
     dist: {
        options: {
           sourcemap: true,
           banner: '/*! My Project 1.0.0 | Lee Easeman */'
        },
        files: {
           'assets/js/script.min.js': ['assets/js/script.js'],
        }
     }
  },
  watch: {
    css: {
      files: 'sass/*.scss',
      tasks: ['sass']
    }
  }

  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','cssmin','uglify', 'watch']);
  
};
'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('amber-dev');

  // Default task.
  //grunt.registerTask('default', ['']);
  grunt.registerTask('test', ['amberc:test_runner', 'execute:test_runner', 'clean:test_runner']);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    // pkg: grunt.file.readJSON('{%= amberjson %}'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // task configuration
    amberc: {
      options: {
        amber_dir: path.join(__dirname, "bower_components", "amber"),
        closure_jar: ''
      },
      test_runner: {
        src: ['node_modules/amber-dev/lib/Test.st'],
        libraries: [
          /* add dependencies packages here */
          '{%= name %}', /* add other code-to-test packages here */
          'SUnit',
          '{%= name %}-Tests' /* add other test packages here */
        ],
        options: { library_dirs: ['src'] },
        main_class: 'NodeTestRunner',
        output_name: 'test_runner'
      }
    },

    execute: {
      test_runner: {
        src: ['test_runner.js']
      }
    },

    clean: {
      test_runner: ['test_runner.js']
    }
  });

};

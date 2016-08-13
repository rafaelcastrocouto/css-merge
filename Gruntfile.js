module.exports = function(grunt) {
  grunt.initConfig({
    'cssmin': { 
        target: {
          files: {
            'merge.css': ['file1.css', 'file2.css']
          }
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);
};

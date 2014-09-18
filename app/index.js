'use strict';
var yeoman = require('yeoman-generator');

var CattailGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    this.log('Only subgenerator available');
  },
});

module.exports = CattailGenerator;

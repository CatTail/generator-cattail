'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var shell = require('shelljs');


var CattailGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    this.log('You called the cattail subgenerator with the argument ' + this.name + '.');
  },

  ask: function() {
    var done = this.async();
    this.prompt([{
      type: 'input',
      name: 'description',
      message: 'Description'
    }, {
      type: 'input',
      name: 'org',
      message: 'Orgnization name',
      default: 'CatTail'
    }], function(answers) {
      this.data = answers;
      done();
    }.bind(this));
  },

  data: function() {
    _.merge(this.data, {
      name: this.name,
      year: new Date().getFullYear(),
    });
  },

  node: function () {
    this.mkdir(this.data.name);
    process.chdir(this.data.name);

    this.copy('History.md', 'History.md');
    this.copy('_travis.yml', '.travis.yml');
    this.copy('index.js', 'index.js');

    this.template('LICENSE', 'LICENSE', this.data);
    this.template('Readme.md', 'Readme.md', this.data);
    this.template('_package.json', 'package.json', this.data);

    this.mkdir('test');
  },

  git: function() {
    shell.exec('git init');
    shell.exec(util.format('git remote add origin git@github.com:%s/%s.git',
                           this.data.org, this.data.name));
    this.copy('_gitignore', '.gitignore');
  },

  deps: function() {
    this.installDependencies();
  }

});

module.exports = CattailGenerator;

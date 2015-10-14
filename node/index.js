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
            name: 'orgrepo',
            message: 'Org/Repo',
            default: 'CatTail/node-' + this.name
        }, {
            type: 'input',
            name: 'description',
            message: 'Description'
        }, {
            type: 'confirm',
            name: 'publish',
            message: 'Is publish',
            default: true
        }], function(answers) {
            var orgrepo = answers.orgrepo.split('/');
            answers.org = orgrepo[0];
            answers.repo = orgrepo[1];
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
        this.copy('_jshintrc', '.jshintrc');
        this.copy('index.js', 'index.js');

        this.template('LICENSE', 'LICENSE', this.data);
        this.template('Readme.md', 'Readme.md', this.data);
        this.template('_package.json', 'package.json', this.data);

        this.mkdir('test');
        this.mkdir('test/fixtures');
    },

    git: function() {
        shell.exec('git init');
        if (this.data.publish) {
            shell.exec(util.format('git remote add origin git@github.com:%s.git',
                                   this.data.orgrepo));
            shell.exec(util.format('hub create %s', this.data.orgrepo));
        }

        this.copy('_gitignore', '.gitignore');
        this.copy('githooks.json', 'githooks.json');
        this.directory('githooks', 'githooks');

        shell.exec('git hooks install');
    },

    deps: function() {
        this.installDependencies();
    }

});

module.exports = CattailGenerator;

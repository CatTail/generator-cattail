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
            default: 'CatTail/' + this.name
        }, {
            type: 'input',
            name: 'description',
            message: 'Description'
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

    golang: function () {
        this.mkdir(this.data.name);
        process.chdir(this.data.name);

        this.copy('History.md', 'History.md');
        this.copy('Makefile', 'Makefile');
        this.copy('_travis.yml', '.travis.yml');
        this.copy('main.go', this.data.name + '.go');
        this.copy('main.go', this.data.name + '_test.go');

        this.template('LICENSE', 'LICENSE', this.data);
        this.template('Readme.md', 'Readme.md', this.data);

        this.mkdir('build');
        this.mkdir('fixtures');
    },

    git: function() {
        shell.exec('git init');
        shell.exec(util.format('git remote add origin git@github.com:%s.git',
                               this.data.orgrepo));
        this.copy('_gitignore', '.gitignore');
        shell.exec(util.format('git create %s', this.data.orgrepo));
    },
});

module.exports = CattailGenerator;

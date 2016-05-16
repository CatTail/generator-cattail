'use strict'

var util = require('util')
var yeoman = require('yeoman-generator')
var _ = require('lodash')
var shell = require('shelljs')

var CattailGenerator = yeoman.generators.NamedBase.extend({
    init() {
        this.log('You called the cattail subgenerator with the argument ' + this.name + '.')
    },

    ask() {
        var done = this.async()
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
        }], (answers) => {
            var orgrepo = answers.orgrepo.split('/')
            answers.org = orgrepo[0]
            answers.repo = orgrepo[1]
            this.data = answers
            done()
        })
    },

    data() {
        _.merge(this.data, {
            name: this.name,
            year: new Date().getFullYear(),
        })
    },

    create() {
        this.mkdir('node-' + this.data.name)
        process.chdir('node-' + this.data.name)
    },

    git() {
        shell.exec('git init')
        if (this.data.publish) {
            shell.exec(util.format('git remote add origin git@github.com:%s.git',
                                   this.data.orgrepo))
            shell.exec(util.format('hub create -d "%s" %s',
                                   this.data.description, this.data.orgrepo))
        }

        shell.exec('git hooks install')
    },

    skeleton() {
        this.directory('githooks', 'githooks')
        this.directory('resources', 'resources')
        this.copy('_babelrc', '.babelrc')
        this.copy('_editorconfig', '.editorconfig')
        this.copy('_eslintignore', '.eslintignore')
        this.copy('_eslintrc.js', '.eslintrc.js')
        this.copy('_gitignore', '.gitignore')
        this.template('_package.json', 'package.json', this.data)
        this.copy('_travis.yml', '.travis.yml')
        this.copy('History.md', 'History.md')
        this.copy('index.js', 'src/index.js')
        this.template('LICENSE', 'LICENSE', this.data)
        this.template('Readme.md', 'Readme.md', this.data)

        this.mkdir('src')
        this.mkdir('src/__tests__')
    },

    deps() {
        this.installDependencies()
    },

})

module.exports = CattailGenerator

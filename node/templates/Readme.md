# <%= repo %> [![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Test coverage][coveralls-image]][coveralls-url]

> <%= description %>

## Installation

## Usage

## Development

Install global dependencies

    npm install -g commitizen cz-conventional-changelog trash-cli conventional-recommended-bump conventional-changelog-cli conventional-github-releaser conventional-commits-detector json

Setup environment variable `CONVENTIONAL_GITHUB_RELEASER_TOKEN`

Commit changes (provided by commitizen)

    git cz

Publish module

    npm run np

## License

MIT

[npm-image]: https://img.shields.io/npm/v/<%= name %>.svg?style=flat
[npm-url]: https://npmjs.org/package/<%= name %>
[travis-image]: https://img.shields.io/travis/<%= org %>/<%= repo %>.svg?style=flat
[travis-url]: https://travis-ci.org/<%= org %>/<%= repo %>
[coveralls-image]: https://img.shields.io/coveralls/<%= org %>/<%= repo %>.svg?style=flat
[coveralls-url]: https://coveralls.io/r/<%= org %>/<%= repo %>?branch=master

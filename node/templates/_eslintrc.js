module.exports = {
    "parser": "babel-eslint",

    "globals": {
        "should": true
    },

    "plugins": [
        "babel"
    ],

    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },

    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "experimentalObjectRestSpread": true,
        "forOf": true,
        "generators": true,
        "globalReturn": true,
        "jsx": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "restParams": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true
    },

    "rules": {
        "babel/arrow-parens": [2, "always"],
        "babel/array-bracket-spacing": [2, "never"],
        "babel/generator-star-spacing": [2, {"before": true, "after": false}],
        "array-bracket-spacing": 0,
        "generator-star-spacing": 0,

        "arrow-spacing": 2,
        "block-scoped-var": 0,
        "brace-style": [2, "1tbs", {"allowSingleLine": true}],
        "callback-return": 2,
        "camelcase": [2, {"properties": "always"}],
        "comma-dangle": [2, "always-multiline"],
        "comma-spacing": 0,
        "comma-style": [2, "last"],
        "complexity": 0,
        "computed-property-spacing": [2, "never"],
        "consistent-return": 0,
        "consistent-this": 0,
        "curly": [2, "all"],
        "default-case": 0,
        "dot-location": [2, "property"],
        "dot-notation": 0,
        "eol-last": 2,
        "eqeqeq": 2,
        "func-names": 0,
        "func-style": 0,
        "guard-for-in": 0,
        "handle-callback-err": [2, "error"],
        "id-length": 0,
        "id-match": [2, "^(?:_?[a-zA-Z0-9]*)|[_A-Z0-9]+$"],
        "indent": [2, 4, {"SwitchCase": 1}],
        "init-declarations": 0,
        "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": 2,
        "linebreak-style": 2,
        "lines-around-comment": 0,
        "max-depth": 0,
        "max-len": [2, 80, 4, {ignoreComments: true}],
        "max-nested-callbacks": 0,
        "max-params": 0,
        "max-statements": 0,
        "new-cap": 0,
        "new-parens": 2,
        "newline-after-var": 0,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 0,
        "no-caller": 2,
        "no-catch-shadow": 0,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-continue": 0,
        "no-control-regex": 0,
        "no-debugger": 1,
        "no-delete-var": 2,
        "no-div-regex": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-else-return": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-implicit-coercion": 2,
        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": [2, "functions"],
        "no-invalid-regexp": 2,
        "no-invalid-this": 0,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": [2, {"allowLoop": true}],
        "no-lone-blocks": 2,
        "no-lonely-if": 2,
        "no-loop-func": 0,
        "no-mixed-requires": [2, true],
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": 0,
        "no-native-reassign": 0,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 0,
        "no-new": 2,
        "no-new-func": 0,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-path-concat": 2,
        "no-plusplus": 0,
        "no-process-env": 0,
        "no-process-exit": 0,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-restricted-modules": 0,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 0,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-sync": 0,
        "no-ternary": 0,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "no-unexpected-multiline": 2,
        "no-unneeded-ternary": 2,
        "no-unreachable": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
        "no-use-before-define": 0,
        "no-useless-call": 2,
        "no-var": 2,
        "no-void": 2,
        "no-warning-comments": 0,
        "no-with": 2,
        "object-curly-spacing": [0, "always"],
        "object-shorthand": [2, "always"],
        "one-var": [2, "never"],
        "operator-assignment": [2, "always"],
        "operator-linebreak": [2, "after"],
        "padded-blocks": 0,
        "prefer-const": 0,
        "prefer-reflect": 0,
        "prefer-spread": 0,
        "quote-props": [2, "as-needed"],
        "quotes": [2, "single"],
        "radix": 2,
        "require-yield": 2,
        "semi": [2, "never"],
        "semi-spacing": [2, {"before": false, "after": true}],
        "sort-vars": 0,
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
        "space-in-parens": 0,
        "space-infix-ops": [2, {"int32Hint": false}],
        "space-unary-ops": [2, {"words": true, "nonwords": false}],
        "spaced-comment": [2, "always"],
        "strict": 0,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,
        "vars-on-top": 0,
        "wrap-iife": 2,
        "wrap-regex": 0,
        "yoda": [2, "never", {"exceptRange": true}]
    }
};

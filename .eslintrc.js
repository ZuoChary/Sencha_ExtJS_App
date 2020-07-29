module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Ext": true,
        "ABP": true,
        "Apprise": true,
        "agGrid": true,
        "ABPControlSet": true,
        "ABPActionCenter": true,
        "vanillaTextMask": true,
        "moment": true,
        "range": true,
        "createNumberMask": true,
        "appInsights": true,
        "returnCitySN": true,
        "ApprisePreInitializer": true,
        "ABPAuthManager": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": { // 0 off, 1 warn, 2 error
        "no-constant-condition": 2, 
        "no-alert": 1, 
        "no-console": 1, 
        "no-debugger": 1, 
        "no-dupe-args": 2, 
        "no-dupe-keys": 2, 
        "no-duplicate-case": 2, 
        "no-func-assign": 2, 
        "no-obj-calls": 2, 
        "no-regex-spaces": 2, 
        "no-sparse-arrays": 2, 
        "no-unexpected-multiline": 2, 
        "no-unreachable": 2, 
        "use-isnan": 2, 
        "valid-typeof": 2, 
        "eqeqeq": 1, 
        "no-caller": 0, 
        "no-eval": 1, 
        "no-redeclare": 2, 
        "no-undef": 2, 
        "no-unused-vars": 1, 
        "no-use-before-define": 2, 
        "comma-dangle": [1, "never"], 
        "no-const-assign": 2, 
        "no-class-assign": 2, 
        "no-confusing-arrow": 2, 
        "no-catch-shadow": 2, 
        "no-dupe-class-members": 2, 

        "no-mixed-spaces-and-tabs": 2, 
        "no-multi-spaces": 2, 
        "array-bracket-spacing": [2, "never"], 
        "object-curly-spacing": [0, "never"], 
        //"block-spacing": [2, "never"], 
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }], 
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }], 
        "computed-property-spacing": [2, "never"], 
        "no-trailing-spaces": 2, 
        "no-spaced-func": 2, 
        "space-before-function-paren": 0, 
        "space-before-blocks": [2, "always"], 
        "space-in-parens": [2, "never"], 
        "space-infix-ops": [2, {
            "int32Hint": false
        }], 
        "space-unary-ops": 2, 
        "spaced-comment": 1, 
        "arrow-spacing": 2, 
        "generator-star-spacing": [2, {
            "before": false,
            "after": true
        }], 
        "yield-star-spacing": [2, {
            "before": true,
            "after": false
        }], 
        "no-irregular-whitespace": 2, 
        "template-curly-spacing": [2, "never"], 

        "curly": [2, "multi-line"], 
        "semi": [2, "always"], 
        "camelcase": [2, {
            "properties": "never"
        }],
        "no-var": 0, 
        "prefer-const": 2, 
        "no-cond-assign": 1, 
        "default-case": 2, 
        "no-else-return": 2, 
        "no-fallthrough": 2, 
        "no-unneeded-ternary": 2, 
        "radix": 2, 
        "quotes": [1, "single"], 
        "prefer-template": 1, 
        "no-useless-concat": 2, 

        "no-prototype-builtins": 0, 
        "dot-notation": [2, {
            "allowKeywords": true
        }], 
        "no-extend-native": 2, 
        "no-new-object": 2, 
        "object-shorthand": [0, "always"], 
        "no-array-constructor": 2, 
        "no-new-func": 0, 
        "no-return-assign": 2, 
        "func-style": [2, "expression", {
            "allowArrowFunctions": true
        }], 
        "new-cap": 2, 
        "strict": 0, 
        "no-empty": [2, {
            "allowEmptyCatch": true
        }], 
        "no-extra-boolean-cast": 2, 
        "no-extra-parens": 2, 
        "no-extra-semi": 2, 
        "no-with": 2, 
        "no-unsafe-finally": 2, 
        "no-case-declarations": 0, 
        "no-new-wrappers": 2, 
        "no-useless-escape": 0, 
        "handle-callback-err": 2,
        "default-case": 0,
        "curly": 0,
        "no-trailing-spaces": 0,
        "no-multi-spaces": 0,
        "prefer-const": 0,
        "prefer-template": 0,
        "quotes": 0,
        "spaced-comment": 0,
        "no-unused-vars": 0,
        "dot-notation": 0,
        "no-console": 1,
        "keyword-spacing": [2, {
            "before": true,
            "after": true
        }]
    }
};
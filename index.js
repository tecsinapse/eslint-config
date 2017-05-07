module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "meteor"
    ],
    "extends": [
        "airbnb",
        "plugin:meteor/recommended",
        "prettier",
        "@meteorjs/eslint-config-meteor"
    ],
    "rules": {
        "indent": 0,//using prettier
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "meteor/audit-argument-checks": "off",
        "no-plusplus": "off",
        "arrow-parens": "off",
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never"
            }
        ],
        "no-console": [
            "warn",
            {
                "allow": [
                    "warn",
                    "error",
                    "time",
                    "timeEnd"
                ]
            }
        ],
        "object-shorthand": [
            "error",
            "always",
            {
                "avoidQuotes": false
            }
        ],
        "meteor/eventmap-params": [
            "error",
            {
                "eventParamName": "event",
                "templateInstanceParamName": "instance"
            }
        ],
        "meteor/template-names": [
            "off"
        ]
    },
    "settings": {
        "import/resolver": "meteor"
    }
};
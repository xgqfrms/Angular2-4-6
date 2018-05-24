module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        "ecmaVersion": 8,// 8 / 6
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],
        "linebreak-style": [2, "unix"],
        "no-global-assign": 2,
        "no-irregular-whitespace": 1,
        "no-case-declarations": 0,
        indent: [0, 4],
        quotes: [1, "double"],
        semi: [2, "always"],
        curly: [2, "all"],
        camelcase: [
            1,
            {
                properties: "always"
            }
        ],
        eqeqeq: [2, "smart"],
        "no-console": [
            "warn",
            {
                allow: ["error"]
            }
        ],
        "one-var-declaration-per-line": [2, "always"],
        "new-cap": 2
    },
    globals: {
        Clipboard: true,
        CodeMirror: true,
        console: true,
        expect: true,
        exports: true,
        module: true,
        page: true,
        Prism: true,
        require: true,
        test: true
    }
};

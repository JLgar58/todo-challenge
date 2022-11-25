/* eslint-disable eol-last */
/* eslint-disable indent */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard'
    ],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module',
        babelOptions: {
            presets: ['@babel/preset-react']
        }
    },
    plugins: [
        'react'
    ],
    rules: {
        semi: ['error', 'never'],
        'max-len': [2, 120, 2, { ignoreComments: true }],
        'no-nested-ternary': 0,
        'no-confusing-arrow': 0,
        'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
        'no-mixed-operators': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-this-in-sfc': 0,
        'eol-last': 'off',
        'no-unused-vars': 'warn'
    }
}
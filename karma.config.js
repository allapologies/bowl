/* eslint-disable */

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

module.exports = function (config) {
    'use strict'

    const testFiles = [
        './**/tests/*.spec.jsx',
        './**/tests/*.spec.js'
    ]

    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        autoWatchBatchDelay: 300,

        files: testFiles,

        preprocessors: {
            './**/tests/**/*.spec.jsx': ['webpack'],
            './**/tests/**/*.spec.js': ['webpack']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher',
        ]
    })
}

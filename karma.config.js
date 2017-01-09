/* eslint-disable */

const webpack = require('webpack')
const path = require('path')

module.exports = function (config) {
    'use strict'

    const testFiles = [
        './tests/**/*.spec.jsx',
        './tests/**/*.spec.js'
    ]

    // lets decide what reporters we need depending on whether we need coverage:
    const reportersList = ['progress', 'jasmine-diff', 'coverage']

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

        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: [/node_modules/, /\.spec\.jsx?$/],
                        loaders: ['babel-loader?plugins=istanbul']
                    },
                    {
                        test: /\.spec\.jsx?$/,
                        exclude: /node_modules/,
                        loaders: ['babel-loader']
                    }
                ]
            },

            resolve: {
//                root: path.join(__dirname, './src/'),
                extensions: ['', '.jsx', '.js', '.json']
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                })
            ]
        },

        webpackMiddleware: {
            noInfo: true
            // chunks: true
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-jasmine-diff-reporter'
        ],
        reporters: reportersList
    })
}

module.exports = {
    extends: 'sbtsbol',
    settings: {
        'import/resolver': {
            webpack: {
                config: './node_modules/webpack-config-sbtsbol/eslint.js'
            }
        }
    }
}

const path = require('path');

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/app/main.js'],
    },
    output: {
        path: path.join(__dirname, 'src/public'),
        filename: 'bundle.js'
    }
};

module.exports = webpackInitConfig;
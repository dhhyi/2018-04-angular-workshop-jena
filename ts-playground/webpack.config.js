module.exports = {
    entry: './app.ts',
    output: { filename: 'bundle.js' },
    resolve: {
        extensions: ['.ts']
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}
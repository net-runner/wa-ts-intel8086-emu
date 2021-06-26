const path = require('path');
module.exports = {
    // The 'first' file to start the import chain
    entry: './src/main.ts',

    // Local dev setings
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
    },

    // Output bunddle into the dist folder
    output: {
        library: 'main',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist"),
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension (means you can leave the file extension off)
        // I purposley didn't put ".wasm" here to illustrate the file being loaded
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                // Tells webpack how to interpret TypeScript files into JavaScript-land
                loader: "ts-loader"
            },
            {
                test: /\.wasm$/,
                // Tells webpack how to interpret wasm files into JavaScript-land
                loader: "wasm-loader"
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    }
}
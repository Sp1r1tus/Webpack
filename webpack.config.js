var path = require("path");

var config = {
    entry: ["./src/Components/App.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                query: {
                    plugins: [
                        'transform-class-properties'
                    ],
                    presets: ['@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript']
                },
                //loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = config;
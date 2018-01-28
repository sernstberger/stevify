
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

const PATHS = {
    src: path.join(__dirname, "src"),
    images: path.join(__dirname, "src", "assets", "images"),
};

const config: webpack.Configuration = {
    entry: [
        // activate HMR for React
        "react-hot-loader/patch",
        "whatwg-fetch",
        "./src/index.tsx",
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "scripts/[id]-[hash].js",
        chunkFilename: "scripts/[id]-[hash].js",
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",

    resolve: {
        modules: [path.resolve("./src"), "node_modules"],
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true,
        }),
        new CopyWebpackPlugin([
            {
                from: PATHS.images,
                to:  "assets/images",
            },
        ]),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },

    module: {
        rules: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader",
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",
            },
            {
                test: /\.(jpg|png|svg)$/,
                exclude: /node_modules/,
                loader: "file-loader?publicPath=./&name=./images/img-[hash].[ext]",
            },
        ],
    },
};
if (process.env.NODE_ENV === "development") {
    config.devServer = {
        contentBase: "dist",
        historyApiFallback: true,
        hot: true,
        stats: "normal",
        host: process.env.HOST || "0.0.0.0",
        port: process.env.PORT || 8080,
        watchOptions: {
            poll: 1000,
        },
    };

} else {
    // Do Prod Build things

    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.MinChunkSizePlugin({
    //   minChunkSize: 10000
    // })
    // new webpack.optimize.ModuleConcatenationPlugin(),
}

module.exports = config;

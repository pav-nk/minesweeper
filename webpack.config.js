const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const resourceDir = path.resolve(__dirname, "./src")
const appEntry = path.join(resourceDir, "./Client/index.tsx")
const htmlTemplate = path.join(resourceDir, "./Client/index.html")
const destinationDir = path.resolve(__dirname, "./dist")

module.exports = (_, argv) => {
  const modeEnv = argv.mode || "development";
  const isProduction = modeEnv === "production";
  const isDevelopment = !isProduction;
  const isWatch = argv?.env?.WEBPACK_SERVE ?? false

  return {
    entry: {
      main: appEntry,
    },
    output: {
      filename: "[name].[chunkhash].js",
      path: destinationDir,
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /[\\/]node_modules[\\/]/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.styl$/,
          use: ["style-loader", "css-loader", "stylus-loader"],
        },
        { test: /\.(jpg|png|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['file-loader'], },
      ],
    },
    plugins: [
      isDevelopment &&
        new ForkTsCheckerWebpackPlugin({
          async: false,
        }),
      isWatch && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: htmlTemplate,
      }),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      plugins: [new TsconfigPathsPlugin()],
    },
    devServer: {
      static: {
        directory: destinationDir,
      },
      client: {
        progress: true,
      },
      compress: false,
      historyApiFallback: {
        disableDotRule: true,
      },
      hot: true,
      open: true,
      port: 4200,
    },
    performance: {
      hints: false,
    },
    stats: "errors-warnings",
    target: isProduction ? "browserslist" : "web",
    devtool: isProduction ? false : "eval-cheap-source-map",
  }
}

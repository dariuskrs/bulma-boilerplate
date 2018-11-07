const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
        //filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "styles.css"
        })
    ],
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [ MiniCssExtractPlugin.loader, 'sass-loader', 'css-loader' ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ]
        }
      ]
    }
  }

/*
module: {
    loaders: [
        {
            test: /\.(scss|sass)$/i,
            include: [
                path.resolve(__dirname, 'node_modules'),
                //path.resolve(__dirname, 'path/to/imported/file/dir'), //<== This solved the issue
            ],
            loaders: ["css", "sass"]
        },
    ]
}
*/

/*
module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
  */
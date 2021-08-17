const glob = require('glob');
const path = require('path');
const srcDir = './src'

const entries = glob.sync('**/*.ts', {
  cwd: srcDir
}).map(key => [key, path.resolve(srcDir, key)])

const entryObjects = Object.fromEntries(entries)

module.exports = {
  mode: 'production',
  entry: entryObjects,
  target: 'node',
  externals: {
    puppeteer: 'require("puppeteer")'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (pathData) => {
      const pathArray = pathData.runtime.split('/')
      const [dirNames, originalFilename] = [pathArray.slice(0, -1), pathArray.slice(-1)[0]]
      const filename = originalFilename.replace(/\..*$/i, '.js');
      const path = [...dirNames, filename].join('/');
      return path
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};

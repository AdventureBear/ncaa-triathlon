var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
 
var compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
app.set('port', (process.env.PORT || 5000));




app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));




var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  //var port = server.address().port;
  console.log('Example app listening at: ', server, process.env.PORT);
});

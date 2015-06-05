 var bunyan =require('bunyan');
  
  PrettyStream = require('bunyan-prettystream');
  
var prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);
var log = new bunyan({
  name: 'ProductPageLog',
  streams: [
    {
      stream: prettyStdOut,
      level: 'info'
    },
    {
      path: 'ProductPage.log',
      level: 'trace'
    }
  ]
});

module.exports = log
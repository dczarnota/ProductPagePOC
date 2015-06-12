'use strict';
var React = require('react');
var Fluxible = require('fluxible');
var fetcherPlugin = require('fluxible-plugin-fetchr');
var routrPlugin = require('fluxible-plugin-routr');
var ProductStore = require('./stores/ProductStore');

var app = new Fluxible({
  appComponent: React.createFactory(require('./Components/pp_pageApp.react.jsx'))
});

app.plug(fetcherPlugin());

// app.plug(routrPlugin({ routes: require('./Routes/routes') }));

app.registerStore(ProductStore);

module.exports = app;

'use strict';

var async = require('async');

module.exports = function(context, res, payload, done){
  context.service.read('productService', res, {}, function(err, payload){
    console.log('ServerActionCreators');
    if(err){
      console.log('Error in ServerActionCreators. Err: ',err);
      return;
    }
    console.log('no error in ServerActionCreators');
    // console.log('ServerActionCreators payload: ',payload)
    context.dispatch('RECEIVE_PRODUCTS_SUCCESS', payload);
  });
};

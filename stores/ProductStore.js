'use strict';
// var AppDispatcher = require('../AppDispatcher');
var EventEmitter = require('events').EventEmitter;
// var ActionTypes = require('../Constants').ActionTypes;
var assign = require('react/lib/Object.assign');
var createStore = require('fluxible/utils/createStore');

// var events = new EventEmitter();
// var CHANGE_EVENT = 'CHANGE';

// var state = {
//   cartItems: []
// };

// var setState = function(newState){
//   console.log('newState: ',newState);
//   assign(state, newState);
//   events.emit(CHANGE_EVENT);
// };

var ProductStore = createStore({
  storeName: 'ProductStore',

  handlers: {
    'RECEIVE_PRODUCTS_SUCCESS': 'getProductData'
  },

  initialize: function(){
    this.cartItems = [];
  },

  // addChangeListner: function(callback){
  //   events.addListener(CHANGE_EVENT, callback);
  // },
  // removeChangeListner: function(callback){
  //   events.removeListener(CHANGE_EVENT, callback);
  // },
  getState: function(){
    console.log('Initial state: ',this.cartItems);
    return this.cartItems;
  },

  // updateCart: function(payload){
  //   this.cartItems = payload;
  //   this.emitChange();
  // },

  getProductData: function(data){
    // console.log('getProductData() on page load. Data: ',data);
    var props = {
      Title: data.Title,
      Hero: data.Hero,
      BottomBar: data.BottomBar
    };
    console.log('getProductData props; ',props)
    return props;
  },

  dehydrate: function(){
    return {
      cartItems: this.cartItems
    };
  },

  rehydrate: function(state){
    this.cartItems = state.cartItems;
  }
});

// ProductStore.dispatchToken = AppDispatcher.register(function(payload) {
//   var action = payload.action;

//   console.log('4. DISPATCH RECEIVED AT ProductStore.');

//   if(action.type === ActionTypes.ADD_TO_CART){
//     console.log('4. Prepare to add to cart: ',payload.action.title);

//     state.cartItems.push(payload.action.title);
//     console.log('4. Updated state.cartItems: ',state.cartItems);
    
//     setState({ cartItems: state.cartItems });
//     console.log('5. ProductStore UPDATES STATE.');
//   }
// });

module.exports = ProductStore;

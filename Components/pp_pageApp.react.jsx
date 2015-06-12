/** @jsx React.DOM */
var React = require('react');
var FluxibleMixin = require('fluxible').Mixin;
var Title = require('./pp_TitleComponent.react');
var Hero = require('./pp_heroComponent.react');
var RightComponent = require('./rightComponent.react');
var skinnyBannerComponent= require('./skinnyBannerComponent.react');
var ProductStore = require('../stores/ProductStore');
var ViewActionCreators = require('../actions/ViewActionCreators');

var pp_pageApp = React.createClass({

	mixins: [FluxibleMixin],

	// getInitialState:  function(props) {
	// 	props=props || this.props;
		
	// 	return {Title:props.Title,Hero:props.Hero,Price:props.Price,PromoData:props.PromoData};
	// 	console.log('props: ',props)
	// 	console.log('ProductStore: ',ProductStore)

	// 	// var state = ProductStore.getState();
	// 	// var props = ProductStore.getProductData(this.props);

	// 	return {
	// 		props: props
	// 		// state: state
	// 	}
	// },

	// componentDidMount: function(){
	// 	ProductStore.addChangeListener(this.handleStoreChange);
	// 	// ViewActionCreators.getState();
	// 	console.log('componentDidMount')
	// },

	// handleStoreChange: function(){
	// 	this.setState(ProductStore.getState());
	// 	console.log('handleStoreChange')
	// },

	render: function() {
		// var title = this.props.Title.title;
		// console.log('pp_pageApp props: ',this.props)
		return (
			<div>
				<skinnyBannerComponent promoData={this.props.PromoData}></skinnyBannerComponent>
				<Title titleData={this.props.Title}></Title>
				<Hero heroData={this.props.Hero}></Hero>
				<RightComponent priceData={this.props.Price}></RightComponent>
			</div>
		);
	}

});

module.exports = pp_pageApp;
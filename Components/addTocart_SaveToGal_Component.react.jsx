/** @jsx React.DOM */
var React = require('react');
var ViewActionCreators = require('../actions/ViewActionCreators');
var ProductStore = require('../stores/ProductStore');

var addTocart_SaveToGal_Component = React.createClass({

	// addToCart: function(title){
	// 	console.log('1. USER INTERACTION: Button clicked. Add item ' + title + ' to cart.');
	// 	ViewActionCreators.addToCart(title);
	// },

	render: function() {
		var titleData = this.props.titleData;
		return (
			<div className="addTocart_SaveToGal_Component">
				<div className="addToCart btn">
					<a className="">ADD TO CART</a>
				</div>
				<div className="addToGal">
					<i className="fa fa-heart-o fa-2x"></i>
				</div>
			</div>
		);
	}

});

module.exports = addTocart_SaveToGal_Component;

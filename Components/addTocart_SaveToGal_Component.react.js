/** @jsx React.DOM */
var React = require('react');

var addTocart_SaveToGal_Component = React.createClass({

	render: function() {
		return (
			<div className="addTocart_SaveToGal_Component">
				<div className="addToCart btn">
					<a className="" href="">ADD TO CART</a>
				</div>
				<div className="addToGal">
					<i className="fa fa-heart-o fa-2x"></i>
				</div>
			</div>
		);
	}

});

module.exports = addTocart_SaveToGal_Component;
/** @jsx React.DOM */
var React = require('react');

var FramingOptions= require('./framingOptions.react.js');

var PriceComnponent = require('./priceComponent.react.js');

var StaticTextComponent = require('./staticTextComponent.react.js');

var AddTocart_SaveToGal_Component = require('./addTocart_SaveToGal_Component.react.js');

var Helpline_Chat_Component = require('./helpline_Chat_Component.react.js');
var rightComponent = React.createClass({

	render: function() {
		var priceData = this.props.priceData;
		return (
			<div className="rightComponent pure-u-1 pure-u-md-2-5">
				<FramingOptions></FramingOptions>
				<PriceComnponent priceData={priceData}></PriceComnponent>
				<StaticTextComponent></StaticTextComponent>
				<AddTocart_SaveToGal_Component></AddTocart_SaveToGal_Component>
				<Helpline_Chat_Component></Helpline_Chat_Component>
			</div>
		);
	}

});

module.exports = rightComponent;

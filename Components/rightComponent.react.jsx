/** @jsx React.DOM */
var React = require('react');

var FramingOptions= require('./framingOptions.react');

var PriceComnponent = require('./priceComponent.react');

var StaticTextComponent = require('./staticTextComponent.react');

var AddTocart_SaveToGal_Component = require('./addTocart_SaveToGal_Component.react');

var Helpline_Chat_Component = require('./helpline_Chat_Component.react');
var rightComponent = React.createClass({

	render: function() {
		var priceData = this.props.priceData;
		var titleData = this.props.title;
		return (
			<div className="rightComponent pure-u-1 pure-u-md-2-5">
				<FramingOptions></FramingOptions>
				<PriceComnponent priceData={priceData}></PriceComnponent>
				<StaticTextComponent></StaticTextComponent>
				<AddTocart_SaveToGal_Component titleData={titleData}></AddTocart_SaveToGal_Component>
				<Helpline_Chat_Component></Helpline_Chat_Component>
			</div>
		);
	}

});

module.exports = rightComponent;

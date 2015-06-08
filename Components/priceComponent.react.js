/** @jsx React.DOM */
var React = require('react');

var priceComponent = React.createClass({

	render: function() {
		var data = this.props.priceData;
		return (
			<div className="priceComponent">
					<div className="prices">
						<span className="strike">{data.displayPrice}</span>
						<span className="currency">{data.price}</span>
					</div>
					<span className="arrivesBy orangeText">Arrives By {data.arrivesBy}</span>
			</div>
		);
	}

});

module.exports = priceComponent;
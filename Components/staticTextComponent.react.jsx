/** @jsx React.DOM */
var React = require('react');

var staticTextComponent = React.createClass({

	render: function() {
		return (
			<div className="staticTextComponent">
			<ul>
				<li>Premium Giclee Print -20"x30" with frame</li>
				<li>Wooden Allegro Bronze frame - height 0.57" width 1.25"</li>
				<li>Soft white top mat with a smooth black mat</li>
				<li>Premium clear acrylic protective layer</li>
			</ul>
			</div>
		);
	}

});

module.exports = staticTextComponent;
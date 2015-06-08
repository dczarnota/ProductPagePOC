/** @jsx React.DOM */
var React = require('react');

var framingOptions = React.createClass({

	render: function() {
		return (
			<div className="framingOptionsComponent">
				<div className="framingOptionsTitle">Choose a Framing Option</div>
				<div className="framingOptionsHelpText orangeText">Learn more about framing 
					<span className="fa-stack">
					  <i className="fa fa-circle-thin fa-stack-1x"></i>
					  <i className="fa fa-info fa-stack-1x"></i>
					</span>
				</div>
				<div className="framingOptions">
					<div className="unframed">
						<span>Unframed Print</span>
					</div>
					<div className="recomended">
						<span>Recomended Frame</span>
					</div>
					<div className="customFrame">
						<span>Design a Custom Frame</span>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = framingOptions;
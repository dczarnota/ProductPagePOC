/** @jsx React.DOM */
var React = require('react');

var helpline_Chat_Component = React.createClass({

	render: function() {
		return (
			<div className="helpline_Chat_Component">
				<div className="imgChat">
					<i className="fa fa-comment-o"></i>
				</div>
				<div className="helpline">
					Need Help? 1-800-555-5555 or 
				</div>
				<div className="chatNow orangeText">
					Chat Now
				</div>
			</div>
		);
	}

});

module.exports = helpline_Chat_Component;
/** @jsx React.DOM */
var React = require('react');

var pp_heroComponent = React.createClass({

	render: function() {
		var data = this.props.heroData;		
		return (
			<div className="heroModule">
				<div className="sideNav">
					<div className="heroThumb">
						<img src={data.thumbnailImageUrl}/>
					</div>
				</div>
				<div className="visualizer">
				<img src={data.genericImageUrl}/>
				</div>
			</div>
		);
	}

});


module.exports = pp_heroComponent;
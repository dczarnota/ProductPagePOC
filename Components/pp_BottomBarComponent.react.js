/** @jsx React.DOM */
var React = require('react');

var pp_BottomBarComponent = React.createClass({
			
	render: function() {
		var data = this.props.bottomBarData
		return (
			<div className="stickyBottomBar">
				<div className="chat"></div>
				<div className="info"></div>
				<div className="price">
					<span className="currency">{data.price}</span><br/>
					<span className="arrivesBy">Arrives By {data.arrivesBy}</span>
				</div>
				<div className="addToCart">
					<a className="btn" href="">ADD TO CART</a>
				</div>
				<div className="myGal"></div>
				<div className="googleStoreLogo"></div>
			</div>
		);
	}

});

module.exports = pp_BottomBarComponent;

/** @jsx React.DOM */
var React = require('react');

var skinnyBannerComponent = React.createClass({

	render: function() {
		var data= this.props.promoData;
		// console.log('skinny-banner- data: ',this.props)
		return (
			<div className="skinny-banner-container">
				<div className="promo-container">
					<div className="banner-text">{data.DiscountOffer}</div>
					<div className="banner-details">
						<div className="promo-code">Use code:<br></br><span>{data.DiscountCode}</span></div>
					</div>
					<div className="banner-exp-date banner-exp-date1">Ends: {data.DiscountExpirationDt}</div>
					<div className="banner-terms-link">details</div><div className="clear"></div>
				</div>
				
			</div>
		);
	}

});

module.exports = skinnyBannerComponent;
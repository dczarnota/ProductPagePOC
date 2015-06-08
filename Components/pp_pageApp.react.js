/** @jsx React.DOM */
var React = require('react');
var Title = require('./pp_TitleComponent.react.js');
var Hero = require('./pp_heroComponent.react.js');
var RightComponent = require('./rightComponent.react.js');

var pp_pageApp = React.createClass({
	getInitialState:  function(props) {
		props=props || this.props;
		return {Title:props.Title,Hero:props.Hero,Price:props.Price};
	},
	render: function() {
		return (
			<div>
				<Title titleData={this.state.Title}></Title>
				<Hero heroData={this.state.Hero}></Hero>
				<RightComponent priceData={this.state.Price}></RightComponent>
			</div>
		);
	}

});

module.exports = pp_pageApp;
import React from "react";

class Nav extends React.Component {
	render() {
		return (
			<div className="ui inverted menu">
				<h2 className="header item">React Clicky</h2>
				<a href="" className="item">
					<i className="code icon" /> Github
				</a>
				<p className="item">{this.props.outcome}</p>
				<div className="right menu">
					<div className="ui item">
						<span>Current Score: {this.props.score}</span>
					</div>
					|
					<div className="ui item">
						<span>High Score: {this.props.highscore}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;

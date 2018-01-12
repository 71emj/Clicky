import React from "react";
import "./style.css";

class Nav extends React.Component {
	render() {
		const color = this.props.color;
		return (
			<div className="ui borderless inverted small menu">
				<h2 className="header item">React MTG Clicky</h2>
				<a href="" className="item">
					<i className="code icon" />Github
				</a>
				<a className={`${color} item`}>{this.props.outcome}</a>
				<div className="right menu">
					<div className="ui item">
						<span>Current Score: {this.props.score} </span>
					</div>
					<div className="ui item"> | </div>
					<div className="ui item">
						<span>High Score: {this.props.highscore}</span>
					</div>
					<div className="ui item" />
				</div>
			</div>
		);
	}
}

export default Nav;

import React from "react";
import "./style.css";

class Nav extends React.Component {

	renderPage = () => {
		const color = this.props.color;

		return window.innerWidth < 897
			? [
					<div
						key="header"
						className={`header item ${color}`}
						style={{ width: "100%" }}>
						<h2 key="res" style={{ width: "100%", textAlign: "center" }}>
							{!color ? "React MTG Clicky" : this.props.outcome}
						</h2>
					</div>,
					<div key="scores" className="menu">
						<div key="scores" className="right menu">
							<div className="ui item">Current Score: {this.props.score}</div>
							<div className="ui item"> | </div>
							<div className="ui item">High Score: {this.props.highscore}</div>
						</div>
					</div>
				]
			: [
					<h2 key="header" className="header item">
						React MTG Clicky
					</h2>,
					<a key="github" href="https://github.com/71emj/Clicky" className="item">
						<i className="code icon" />Github
					</a>,
					<a key="res" className={`${color} item`}>
						{this.props.outcome}
					</a>,
					<div key="scores" className="right menu">
						<div className="ui item">Current Score: {this.props.score}</div>
						<div className="ui item"> | </div>
						<div className="ui item">High Score: {this.props.highscore}</div>
					</div>
				];
	};

	timeout() {
		const toggle = this.state.toggle;

		this.setState({
			toggle: !toggle
		});

		setTimeout(() => {
			this.setState({
				toggle: !toggle
			});
		}, 1000);
	}

	componentWillMount() {
		window.addEventListener("resize", () => {
			this.renderPage();
		});
	}

	render() {
		// const page = this.renderPage(window.innerHTML);
		return <div className="ui borderless inverted small menu">{this.renderPage()}</div>;
	}
}

export default Nav;

// <h2 style={{ width: "100%", textAlign: "center" }}>React MTG Clicky</h2>

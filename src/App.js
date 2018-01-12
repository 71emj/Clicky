import React from "react";

// import "./css/reset.min.css";
import "./css/card.min.css";
import "./css/container.min.css";
import "./css/grid.min.css";
import "./css/header.min.css";
// import "./css/icon.min.css";
import "./css/image.min.css";
import "./css/menu.min.css";

import Game from "./components/Game";
import Nav from "./components/Nav";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameStarted: false,
			highScore: 0,
			roundCount: 0,
			gameLost: 0
		};
	}

	outcome = flag => {
		if (!flag) {
			this.setState({
				roundCount: 0,
				gameLost: 1
			});
			return;
		}

		const accu = this.state.roundCount + flag;
		const highScore = this.state.highScore < accu ? accu : this.state.highScore;

		this.setState({
			roundCount: accu,
			highScore: highScore,
			gameLost: 0
		});
	};

	renderOutcome() {
		const { highScore, gameLost, gameStarted } = this.state;
		if (!gameStarted) {
			return "Click an image to start the game.";
		}
		return gameLost ? "You Guessed Wrong!!" : "Great Guess!!";
	}

	componentDidUpdate() {
		if (!this.state.gameStarted) {
			this.setState({ gameStarted: true });
		}
	}

	render() {
		const { highScore, roundCount, gameStarted } = this.state;
		console.log(gameStarted);
		const msg = this.renderOutcome();

		return (
			<div className="">
				<header className="ui header">
					<Nav outcome={msg} highscore={highScore} score={roundCount} />
				</header>
				<main>
					<Game onClick={this.outcome} />
				</main>
			</div>
		);
	}
}

export default App;

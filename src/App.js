import React from "react";

// import "./css/reset.min.css";
import "./css/card.min.css";
import "./css/container.min.css";
import "./css/grid.min.css";
import "./css/header.min.css";
// import "./css/icon.min.css";
import "./css/image.min.css";
import "./css/menu.min.css";
import "./style.css";

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
		const { highScore, roundCount, gameStarted, gameLost } = this.state;
		console.log(gameStarted);
		const msg = this.renderOutcome();
		const color = !gameStarted ? "" : gameLost ? "active red" : "active blue";

		return [
			<header className="ui inverted vertical masthead center aligned">
				<Nav outcome={msg} highscore={highScore} score={roundCount} color={color}/>
			</header>,
			<main>
				<Game onClick={this.outcome} />
			</main>
		];
	}
}

export default App;

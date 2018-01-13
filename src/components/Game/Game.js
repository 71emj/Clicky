import React from "react";
import Board from "../Board";
import { shuffle } from "../../util/util.js";
import "./style.css";
import data from "../../game.json";


class Game extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			keys: new Array(12).fill(false).reduce((obj, cur, i) => { // obj { key: false, key2: false....keyN: false }
				obj[data[i].id] = cur;
				return obj;
			}, {}),
			history: [{
				sequence: data
			}],
			stepNum: 0
		};
	}

	reset = () => {
		console.log("resetting");
		const {history, keys, stepNum} = this.state;
		const sequence = shuffle(history[stepNum].sequence);

		for (let elem in keys) {
			keys[elem] = false;
		}

		this.setState({ 
			keys: keys,
			history: history.concat([{
				sequence: sequence
			}]),
			stepNum: stepNum + 1
		});
	}

	handleClick = (event) => {
		event.stopPropagation();

		const {id} = event.currentTarget;
		const {history, keys, stepNum} = this.state;
		const sequence = shuffle(history[stepNum].sequence);

		if (keys[id]) {
			console.log(id);
			
			this.props.onClick(0); 
			return this.reset();
		}

		keys[id] = !keys[id];
		this.props.onClick(1);

		this.setState({
			keys: keys,
			history: history.concat([{
				sequence: sequence
			}]),
			stepNum: stepNum + 1
		});
	}

	render() {
		const history = this.state.history.slice(0, this.state.stepNum + 1);
		const cur = this.state.stepNum;

		return (
			<div className="ui container">
				<Board 
					sequence={history[cur].sequence}
					onClick={this.handleClick}
				/>
			</div>		
		)
	}
}

export default Game;
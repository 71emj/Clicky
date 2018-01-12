import React from "react";
import Board from "../Board";
import "./style.css";
import data from "../../game.json";


const random = (factor) => {
	return Math.floor(Math.random() * factor);
};

const swap = (array, i, r) => {
	[array[i], array[r]] = [array[r], array[i]];
	return array;
};

const shuffle = (array) => {
	const arr = array.slice();
	const n = array.length;
	const l = n;

	for (let i = 0; i < l; i++) {
		const r = random(l);
		swap(arr, i, r);
	}
	return arr;
};

class Game extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			keys: new Array(12).fill(false).reduce((obj, cur, i) => { // obj { key: false, key2: false....keyN: false }
				obj[data[i].id] = cur;
				return obj;
			}, {}),
			sequence: data // data is imported from json which looks like [ {...}, {...}, {...}, {...}.. ];
		};
	}

	reset = () => {
		console.log("resetting");
		const keys = Object.assign({}, this.state.keys);
		const sequence = shuffle(this.state.sequence);

		for (let elem in keys) {
			keys[elem] = false;
		}

		console.log(keys);

		this.setState({
			sequence: sequence,
			keys: keys,
		});
	}

	handleClick = (event) => {
		const {id} = event.currentTarget;

		const sequence = shuffle(this.state.sequence.slice());
		const keys = Object.assign({}, this.state.keys);

		if (keys[id]) {
			this.props.onClick(0); 
			console.log(id);
			console.log(keys);
			return this.reset();
		}

		keys[id] = !keys[id];
		this.props.onClick(1);

		this.setState({
			sequence: sequence,
			keys: keys,
		});
	}

	render() {

		return (
			<div className="ui container">
				<Board 
					sequence={this.state.sequence}
					onClick={this.handleClick}
				/>
			</div>		
		)
	}
}

export default Game;
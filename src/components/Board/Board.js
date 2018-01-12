import React from "react";
import Card from "../Card";
import "./style.css";

class Board extends React.Component {
	renderCard() {
		console.log("ready to render");
		const sequence = this.props.sequence; // use sequnce to shuffle position

		return sequence.map((elem, i) => {
			return Card(elem, this.props.onClick); // sequence is tied to key and image sequece = [ { key: "foo", image: "src" }, { key: "foo", image: "src" }... ]
		});
	}

	render() {
		return (
			<section className="ui">
				<div className="ui stackable five column doubling centered relaxed grid">
					{this.renderCard()}
				</div>
			</section>
		);
	}
}

export default Board;

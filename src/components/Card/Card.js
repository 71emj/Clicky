import React from "react";
import "./style.css";

const Card = (keydat, onClick) => {
	return (
		<div className="ui column" key={keydat.id}>
			<div className="ui segment" onClick={onClick} id={keydat.id}>
				<div className="content">
					<img className="ui fluid image" src={keydat.image} alt="this is an mtg card"/>
				</div>
			</div>
		</div>
	);
};

export default Card;

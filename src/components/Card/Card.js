import React from "react";
import "./style.css";

const Card = (keydat, onClick) => {
	return (
		<div className="ui column" onClick={onClick} key={keydat.id} id={keydat.id}>
			<div className="ui segment">
				<div className="content">
					<img className="ui fluid image" src={keydat.image} />
				</div>
			</div>
		</div>
	);
};

export default Card;

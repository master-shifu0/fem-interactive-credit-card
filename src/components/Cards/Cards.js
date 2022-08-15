import React from "react";
import frontCard from "../../images/bg-card-front.png";
import backCard from "../../images/bg-card-back.png";
import "./Cards.css";
function Cards() {
	return (
		<div className="cards">
			<div className="card front">
				<img src={frontCard} alt="" />
			</div>
			<div>
				<img src={backCard} alt="" />
			</div>
		</div>
	);
}

export default Cards;

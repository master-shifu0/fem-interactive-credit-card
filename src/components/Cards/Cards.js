import React from "react";
import frontCard from "../../images/bg-card-front.png";
import backCard from "../../images/bg-card-back.png";
import cardLogo from "../../images/card-logo.svg";
import "./Cards.css";
function Cards(props) {
	const { cardholderName, cardNumber, expiryDate, cvc } = props.cardState;
	return (
		<div className="cards">
			<div className="card-front card">
				<img className="card-img" src={frontCard} alt="" />
				<div className="card-content">
					<img className="" src={cardLogo} alt="" />
					<h1 className="card-number">{cardNumber || "0000 0000 0000 0000"}</h1>
					<div className="flex">
						<p className="cardholder-name">{cardholderName || "Jane Appleseed"}</p>
						<p>
							{expiryDate.mm || "MM"}/{expiryDate.yy || "YY"}
						</p>
					</div>
				</div>
			</div>

			<div className="card-back card">
				<img className=" card-img" src={backCard} alt="" />
				<div className="card-content">
					<p className="cvc">{cvc}</p>
				</div>
			</div>
		</div>
	);
}

export default Cards;

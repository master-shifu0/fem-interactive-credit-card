import React, { useReducer } from "react";

import "./CardForm.css";
const initialCardState = {
	cardholderName: "",
	cardNumber: "",
	expiryDate: {
		mm: "",
		yy: "",
	},
	cvc: "",
};
const reducer = (currentCardValue, action) => {
	switch (action.case) {
		case "cardholderName":
			return { ...currentCardValue, cardholderName: action.value };
		case "cardNumber":
			return { ...currentCardValue, cardNumber: action.value };
		case "mm":
			return {
				...currentCardValue,
				expiryDate: { ...currentCardValue.expiryDate, mm: action.value },
			};
		case "yy":
			return {
				...currentCardValue,
				expiryDate: { ...currentCardValue.expiryDate, yy: action.value },
			};
		case "cvc":
			return { ...currentCardValue, cvc: action.value };
		default:
			return currentCardValue;
	}
};

function CardForm() {
	const [cardState, cardDispatch] = useReducer(reducer, initialCardState);
	return (
		<form className="card-form">
			<div className="card-name">
				<p className="title">cardholder name</p>
				<input
					name="cardholderName"
					value={cardState.cardholderName}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="e.g Jane Appleseed"
				/>
			</div>

			<div className="card-number">
				<p className="title">card number</p>
				<input
					name="cardNumber"
					value={cardState.cardNumber}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="e.g 1234 5678 9012 3456"
				/>
			</div>

			<div className="expiry-date">
				<p className="title">exp. date (mm/yy)</p>

				<input
					name="mm"
					value={cardState.expiryDate.mm}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="MM"
				/>
				<input
					name="yy"
					value={cardState.expiryDate.yy}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="YY"
				/>
			</div>

			<div className="cvc">
				<p className="title">cvc</p>
				<input
					name="cvc"
					value={cardState.cvc}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="e.g 123"
				/>
			</div>

			<button className="submit">Confirm</button>
		</form>
	);
}

export default CardForm;

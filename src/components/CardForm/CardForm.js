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
			<input
				id="cardholderName"
				name="cardholderName"
				value={cardState.cardholderName}
				onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
			/>

			<input
				name="cardNumber"
				value={cardState.cardNumber}
				onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
			/>

			<div className="expiry-date">
				<p className="form-title">{"exp. date (mm/yy)"}</p>
				<input
					name="mm"
					value={cardState.expiryDate.mm}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
				/>

				<div>
					<p className="form-title">cvc</p>
					<input
						name="yy"
						value={cardState.expiryDate.yy}
						onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					/>
				</div>
			</div>

			<input
				name="cvc"
				value={cardState.cvc}
				onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
			/>

			<button>testing</button>
		</form>
	);
}

export default CardForm;

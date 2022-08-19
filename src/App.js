import { useReducer } from "react";

import "./App.css";

import background from "./images/bg-main-desktop.png";
import CardForm from "./components/CardForm/CardForm";
import Cards from "./components/Cards/Cards";

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

function App() {
	const [cardState, cardDispatch] = useReducer(reducer, initialCardState);
	const styles = {
		backgroundImage: `url(${background})`,
		backgroundRepeat: "no-repeat",
	};
	return (
		<main style={styles}>
			<Cards cardState={cardState} />
			<CardForm cardState={cardState} cardDispatch={cardDispatch} />
		</main>
	);
}

export default App;

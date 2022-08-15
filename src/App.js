import "./App.css";

import background from "./images/bg-main-desktop.png";
import CardForm from "./components/CardForm/CardForm";
import Cards from "./components/Cards/Cards";
function App() {
	const styles = {
		backgroundImage: `url(${background})`,
		backgroundRepeat: "no-repeat",
		height: "100vh",
	};
	return (
		<main>
			<div className="background" style={styles}>
				<Cards />
			</div>
			<div className="form-wrapper">
				<CardForm />
			</div>
		</main>
	);
}

export default App;

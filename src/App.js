import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./data";

function App() {
	const Cards = data.map((card) => {
		return <Card key={card.id} {...card} />;
	});
	return (
		<>
			<div className="App">
				<Navbar />
				<Hero />
				<div className="cards-container">
					{Cards}
					{Cards}
					{Cards}
					{Cards}
				</div>
			</div>
		</>
	);
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import getAllCountries from "./covid-api";

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(async () => {
		const retrievedCountries = await getAllCountries();
		setCountries(retrievedCountries);
		// below it's an array of dependencies.
	}, [setCountries]);

	return (
		<div className="App">
			<input data-testid="input-field" />
			{countries}
		</div>
	);
}

export default App;

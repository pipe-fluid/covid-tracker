import { useEffect, useState } from "react";
import "./App.css";

import { getAllCountries } from "./covid-api";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      await getAllCountries().then((data) => {
        setCountries(data.locations);
      });
    }
    fetchCountries();
  }, [setCountries]);

  return (
    <div className="App">
      <input data-testid="input-field" />
      <ul data-testid="countries-list">
        {countries.map((item) => (
          <li key={item.id}>{item.country}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

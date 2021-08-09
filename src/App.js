import { useEffect, useState } from "react";
import './App.css';
import Country from "./components/Country/Country";
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => console.log(setCountries(data)))
  }, []);

  return (
    <div>
      <h1>Country Loaded {countries.length}</h1>
      <ul>
        {countries.map(country => <Country country={country}></Country>)}
      </ul>
    </div>
  );
}

export default App;

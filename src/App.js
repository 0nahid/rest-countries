import { useEffect, useState } from "react";
import './App.css';
import Country from "./components/Country/Country";
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, []);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="country-body">
      <h1>Country Loaded {countries.length}</h1>
      <h1>Country Added {cart.length} </h1>
      <ul>
        {countries.map(country => <Country
          country={country}
          handleAddCountry={handleAddCountry}
          key={country.alpha2Code} ></Country>)}
      </ul>
    </div>
  );
}

export default App;

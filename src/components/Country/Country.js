import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, capital, flag, region , population } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country">
            <h1>Name: {name}</h1>
            <h2>Capital: {capital}</h2>
            <h3>Population: {population}</h3>
            <h3>Region:{region} </h3>
            <img src={flag} alt="" />
            <button onClick={() => handleAddCountry(props.country)} >Add Country</button>
        </div>
    );
};

export default Country;
import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, capital, flag, region  } = props.country;
    const currency = props.country.currencies.name;
    return (
        <div className="country">
            <h1>Name: {name}</h1>
            <h2>Capital: {capital}</h2>
            <h3>Region:{region} </h3>
            <p>Currency: {currency}</p>
            <img src={flag} alt="" />
        </div>
    );
};

export default Country;
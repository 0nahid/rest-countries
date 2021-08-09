import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, capital, flag, region } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country">
            <h1>Name: {name}</h1>
            <h2>Capital: {capital}</h2>
            <h3>Region:{region} </h3>
            <img src={flag} alt="" />
            <button onClick={() => handleAddCountry(props.country)} >Add Currency</button>
        </div>
    );
};

export default Country;
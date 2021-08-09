import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation += country.population;
    // }
    const totalPopulation = cart.reduce((totalPopulation, country) => totalPopulation + country.population, 0);
    return (
        <div>
            <h2>This is a Cart {cart.length} </h2>
            <h2>Total Population: {totalPopulation}</h2>
        </div>
    );
};

export default Cart;
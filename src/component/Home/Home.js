import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Country : {countries.length}</h1>
            {
                   countries.map(country => <Country key={country.name} country={country}></Country>)
               }
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const [country, setCountry] = useState({});
    console.log(country);
    const {countryName} = useParams();
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])
    return (
        <div>
            <h2>Country information: {countryName}</h2>
            <img style={{height: '80px'}} src={country.flag} alt="" />
            <h1>Country: {country.name}</h1>
            <p>Area: {country.area}</p>
            <p>Population : {country.population}</p>
        </div>
    );
};

export default CountryDetail;
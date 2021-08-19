import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
 const {name, flag, area, population} = props.country;
const history = useHistory();

const handleClick = (name) => {
    history.push(`/country-detail/${name}`)
}

 const countryStyle = {
     border: '2px solid red',
     borderRadius: '10px',
     padding: '10px',
     margin: '10px',
 }
    return (
        <div style={countryStyle}>
            <h2>{name}</h2>
            <img style={{height: '80px'}} src={flag} alt="" />
            <p>{area}</p>
            <p>{population}</p>
            <button onClick={ () => handleClick(name)}>Click now {name}</button>
            <Link to={`/country-detail/${name}`}><button>Shaw of</button></Link>
        </div>
    );
};

export default Country;
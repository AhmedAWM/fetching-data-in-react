import React, { useState, useEffect } from "react";
import axios from 'axios'

function Countries() {
    const [countries, setCountries] = useState([]);

    async function getAllCountries() {
        const allCountries = await axios.get('https://restcountries.com/v3.1/name/all');

        setCountries(allCountries.data);
    }

    useEffect(() => { getAllCountries(); }, []); // Calling the function one time only
    
    return (
        <>
            <h1>All Contries</h1>
            {
                countries.map((oneCountry) =>
                    <div key={ oneCountry.name.common }>
                        <h2>{ oneCountry.name.official }</h2>
                        <img src={ oneCountry.flags.svg } alt={ oneCountry.flags.alt } style={{width: "25%", height: "auto", marginBottom: "48px"}} />
                    </div>
                )
            }
        </>
    )
}

export default Countries;
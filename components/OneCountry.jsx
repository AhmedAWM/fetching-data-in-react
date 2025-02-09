import React, { useState, useEffect } from "react";
import axios from 'axios';

function OneCountry() {
    const [oneCountry, setOneCountry] = useState(null);

    async function getOneCountry(id) {
        const country = await axios.get('https://restcountries.com/v3.1/alpha/' + id);
        console.log(country.data[0]);
        setOneCountry(country.data[0]);
    }

    useEffect(() => {
        getOneCountry('048');
    }, []);

    return (
        <>
            <h1>Country</h1>
            {  oneCountry &&
                (<div key={ oneCountry.name.common }>
                    <h2>{ oneCountry.name.official }</h2>
                    <img src={ oneCountry.flags.svg } alt={ oneCountry.flags.alt } style={{width: "25%", height: "auto", marginBottom: "48px"}} />
                </div>)
            }
        </>
    )
}

export default OneCountry;
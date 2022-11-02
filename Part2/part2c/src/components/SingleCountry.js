import React from "react";
const SingleCountry=(props)=>{
const {nameOfCountry,capital,area,lang}=props
    return(
        <div>
            <h1>{nameOfCountry}</h1>
            <p>Capital: {capital}</p>
            <p>Area : {area}</p>
            <h3>Languages</h3>
            <ul>
                {lang}
            </ul>
        </div>
    )
}
export default SingleCountry

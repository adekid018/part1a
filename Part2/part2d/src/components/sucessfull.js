import React from "react"
const Sucessfull=({name})=>{
    const sucessfulStyle={
        color:'green',
        fontSize:30,
        display:"flex",
        fontWeight:'bold',
        bordeRadius: 5,
        padding:10,
    }
    return(
        <p style={sucessfulStyle}>{name}</p>
    )
}
export default Sucessfull
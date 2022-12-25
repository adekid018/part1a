import React from "react"
const Sucessfull=({name})=>{
    const sucessfulStyle={
        color:'red',
        fontSize:30,
        display:"flex",
        fontWeight:'bold',
        bordeRadius: 5,
        padding:10
    }
    const unSucessfulStyle={
        color:'red',
        fontSize:30,
        display:"flex",
        fontWeight:'bold',
        bordeRadius: 5,
        padding:10
    }
    if(name===null){
        return null
    }
    else if(name!==undefined && name<3){
        return(
            <p style={unSucessfulStyle}>{name}</p>
        )
    }
        return(
        <p style={sucessfulStyle}>{name}</p>
    )
}
export default Sucessfull
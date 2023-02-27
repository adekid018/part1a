import React from "react"
const Notification=({sucesssNotification,unSucessfulNotification})=>{
    const sucessfulStyle={
        color:'green',
        fontSize:30,
        display:"flex",
        fontWeight:'bold',
        bordeRadius: 5,
        padding:10,
        border:"solid" 
    }
    const unSucessfulStyle={
        fontSize:30,
        display:"flex",
        fontWeight:'bold',
        bordeRadius: 5,
        padding:10,
        color:"red",
        border:"solid"
    }
    if(sucesssNotification!==null){
        return (<p style={sucessfulStyle}>{sucesssNotification}</p>)
    }
    if(unSucessfulNotification !== null){
        return(
            <p style={unSucessfulStyle}>{unSucessfulNotification}</p>
        )
    }
}
export default Notification
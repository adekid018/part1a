import React from "react";
const Phonebook=(props)=>{
    const {contact,phoneNumber,deletion}=props
    return(
      <li className="numbers">{contact}: {phoneNumber} <button onClick={deletion}>Delete</button></li>
    )
}
export default Phonebook
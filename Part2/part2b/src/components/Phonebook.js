import React from "react";
const Phonebook=(props)=>{
    const {contact,phoneNumber}=props
    return(
      <li>{contact} {phoneNumber}</li>
    )
}
export default Phonebook
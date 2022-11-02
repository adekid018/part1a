import React from "react"

const PersonForm=({submission,newName,updatingName,newNumber,updatingNumber})=>{
    
    return(
        <>
        <form onSubmit={submission}>
        <div>
          name: <input  value={newName} onChange={updatingName} required/>
        </div>
        <div>number:  
          <input value={newNumber} onChange={updatingNumber} required type={"number"} maxLength={12}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </>
    )
}
export default PersonForm
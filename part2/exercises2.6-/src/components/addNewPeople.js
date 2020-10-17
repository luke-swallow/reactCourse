import React from 'react'

const AddPeople = (props) =>{
    return(
        <form>
        <div>name: <input value={props.newName} onChange= {props.handleName}/></div>
        <div>number: <input value={props.newNumber} onChange= {props.handleNumber}/></div>
        <button type="submit" onClick={props.addName}>add</button>
</form>
    )

}
export default AddPeople

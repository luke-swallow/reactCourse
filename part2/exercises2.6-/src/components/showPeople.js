import React from 'react'
const ShowPeople = (props) => {
    return(
    <div> <ul>{props.peopleToRender.map((personObj)=> <li key ={personObj.name}>{personObj.name} {personObj.number} </li>)}  </ul></div>
    )
}
export default ShowPeople
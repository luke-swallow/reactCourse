import React from 'react'
const Filter = (props) => {
    return(
        <div>filter shown: <input value={props.filterName} onChange= {props.func}/></div>
    )

}
export default Filter
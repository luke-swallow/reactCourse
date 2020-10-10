import React from 'react'

function Part(props) {
    return(
        <p> {props.part.name}, total exercises: {props.part.exercises}</p>
    )
}

export default Part
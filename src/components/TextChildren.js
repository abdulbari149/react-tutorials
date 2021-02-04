import React from 'react'

function TextChildren(props) {
    console.log(props);
    return (
        <div>
            <p> {props.para} </p>
            <p> {props.para2} </p>
        </div>
    )
}

export default TextChildren

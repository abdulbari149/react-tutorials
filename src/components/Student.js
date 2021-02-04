import React from 'react'

function Student({ student }) {
    return (
        <div>
            <h1>Student: {student.id }</h1>
            <p>Name: {student.name} </p>
            <p>Current Course: {student.course}</p>
            <p>Degree: {student.degree}</p>
        </div>
    )
}

export default Student


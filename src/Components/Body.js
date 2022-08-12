import React from 'react'

function Body(props) {
  return (
    <div style={{"marginLeft":"20px"}}>
        <h2>First Name: {props.fname}</h2>
        <h2>Last Name: {props.lname}</h2>
        <h2>Age: {props.age}</h2>
        <hr />
    </div>
  )
}

export default Body
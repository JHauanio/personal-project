import React, { Component } from 'react';
import { render } from 'react-dom'

const SignInHolder = (props) => {
    const submitHandler = () => {
        const username = document.querySelector('#usernameBtn')
        const password = document.querySelector('#passwordBtn')

        fetch(`http://localhost:3000/submitWorkout`, {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify
        })
            .then(response => response.json())
            .catch(err => console.log('password issue'))
    }
    return (
     <div>
      Username: 
      <input id="usernameBtn"></input>
      Password: 
      <input id="passwordBtn"></input>

      <button onClick={submitHandler}>Submit</button>
    </div>
    )
}

export default SignInHolder
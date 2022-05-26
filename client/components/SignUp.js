import React, { Component } from 'react';
import { render } from 'react-dom'

const SignUp = (props) => {
    const submitHandler = () => {
        console.log('submitted post')
        const username = document.querySelector('#usernameBtn')
        const password = document.querySelector('#passwordBtn')

        fetch(`http://localhost:3000/signup?username=${username}&password=${password}`)
            .then(response => response.json())
            .catch(err => console.log('password issue'))
            return
        }

    return (
     <div>
      Username: 
      <input id="usernameBtn"></input>
      Password: 
      <input id="passwordBtn"></input>

      <button onClick={() => {submitHandler}}>Sign Up</button>
    </div>
    )
}

export default SignUp
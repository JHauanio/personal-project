import React, { Component, useEffect, useState  } from 'react';
import { render } from 'react-dom'

const WorkoutCreator = (props) => {
   
    // Adds individual entries into routine array and constructs text showing user routine
    const woCreator = () => {
        const woName = document.querySelector('#woNameField').value;
        const sets = document.querySelector('#setsField').value;
        const reps = document.querySelector('#repsField').value;
        const weight = document.querySelector('#weightField').value;
        props.updateRoutine({woName : woName, set : sets, reps : reps, weight : weight})        
    }

    // sends routine to database and clears fields
    const routineCreator = async (req, res, next) => {
        const day = document.querySelector('#routineDayField').value;
        const routine = props.newRoutine
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({day : day, routine : routine})
        }
        try {
            const fetchResponse = await fetch('http://localhost:3000/submitWorkout', settings)
            const data = await fetchResponse.json()
        } catch (error) {
            console.log('error in post')
            return error
        }
        finally {
            props.resetRoutine()
            props.sendCreator(false)
            props.selectDay()
            document.querySelector('#woNameField').value = '';
            document.querySelector('#setsField').value = '';
            document.querySelector('#repsField').value = '';
            document.querySelector('#weightField').value = '';
            document.querySelector('#routineDayField').value = '';
        }
    }

    return (
    <div>
        Creator:
     <div>
        Day: <input id='routineDayField' ></input>
        <div></div>
        Routine: <div id='routineField'> { props.stringRoutine } </div>
        <div></div>
        Workout Name: <input id='woNameField'></input> <div></div>
        Sets: <input id='setsField'></input> <div></div>
        Reps: <input id='repsField'></input> <div></div>
        Weight <input id='weightField'></input><div></div>
        <button onClick={woCreator}>Add Workout to Routine</button>
        <button onClick={routineCreator}>Add Routine</button>
    </div>
    </div>
    )
}

export default WorkoutCreator
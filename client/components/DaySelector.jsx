import React, { Component } from 'react';
import { render } from 'react-dom'

    const DaySelector = (props) => {
        const buttonGen = () => {
            const buttons = []
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            for (let i in days){
                buttons.push(<><button id={days[i]} onClick={clickHandler}>{days[i]}</button></>)
            }
            return buttons
        }
    
    const clickHandler = async () => {
        const routineCreator = async (req, res, next) => {
            const day = event.target.id;
            let data;
            const settings = {
                method: 'GET',
            }
                const fetchResponse = await fetch(`http://localhost:3000/routine/${day}`, settings)
                if ( await fetchResponse.status === 204){
                    console.log('204')
                    console.log(props.emptyDay)
                    // should set selectDay back to false and emptyday to true
                    props.selectDay()
                    props.sendCreator(true)
                }
                else if (await fetchResponse.status === 200){
                    // set selectDay to object with day and routine, causing rerender on main 
                    console.log ('200')
                    data = await fetchResponse.json()
                    const retObj = {day : data.day, routine : data.routine}
                    props.selectDay(retObj)
                    props.sendCreator(true)
                }
            else{
                console.log('error in get day')
                throw new Exception
            }
        }
        routineCreator()
    }
    
    return (
    <div>
        Select Day
     <div>
         { buttonGen() }
    </div>
    </div>
    )
}

export default DaySelector
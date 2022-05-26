import React, { Component } from 'react';
import { render } from 'react-dom'






const Day = (props) => {
    console.log('hi',props.day)
    const pageGen = () => {
        const routine = props.day.routine
        let divs = []
        let id = 0
        routine.forEach((ele) => {
            let name = ele.woName
            let sets = ele.set
            let reps = ele.reps
            let weight = ele.weight
            divs.push(
                <>
                <div>{name}</div>
                <div>{sets} X {reps}</div>
                <div>{weight}</div>
                <input id={'w' + id} type="checkbox"></input>
                </>
            )
            id++
        })
        return divs
    }
    const page = pageGen()
    const clickHandler = () => {
        props.sendCreator(false)
        props.selectDay()
    }
    return (
     <div>
         <div> { props.day.day } </div>
         <div> { page } </div>
         <button onClick={ clickHandler }> Finished </button>
    </div>
    )
}

export default Day
import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom'
import DaySelector from './DaySelector.jsx'
import WorkoutCreator from './WorkoutCreator.jsx'
import Day from './Day.jsx'
import * as actions from '../actions/actions';


const mapStateToProps = state => (
     {
    newRoutine : state.wo.newRoutine,
    currRoutine : state.wo.currRoutine,
    stringRoutine : state.wo.stringRoutine,
    inDay : state.wo.inDay,
    emptyDay : state.wo.emptyDay,
});

  const mapDispatchToProps = dispatch => ({
    updateRoutine : (input) => dispatch(actions.UPDATE_NEW_ROUTINE(input)),
    resetRoutine : () => dispatch(actions.RESET_ROUTINE()),
    selectDay : (input) => dispatch(actions.SELECT_DAY(input)),
    sendCreator : (input) => dispatch(actions.SEND_CREATOR(input)),
  });



const MainHolder = (props) => {
    console.log(props.emptyDay, props.inDay)
    useEffect(() => console.log(props), [props.emptyDay])
    // if inDay is false (default state) render DS, if inDay has content (content loads with button click) render Day, 
    // if inDay is false and emptyDay is true (get request returned 204 no body) enter WC
    return (
       <> 
        {props.emptyDay === true ? <div><DaySelector emptyDay={props.emptyDay} selectDay = {props.selectDay} sendCreator = {props.sendCreator}/></div>
       : (props.inDay !== false) ? <><Day day={props.inDay} selectDay={props.selectDay} sendCreator={props.sendCreator}/></> : <div> <WorkoutCreator selectDay={props.selectDay} sendCreator = {props.sendCreator} stringRoutine = {props.stringRoutine} resetRoutine = {props.resetRoutine} newRoutine={props.newRoutine} updateRoutine={props.updateRoutine}/></div>
        }
        </>
    )
}
// <div> <WorkoutCreator stringRoutine = {props.stringRoutine} resetRoutine = {props.resetRoutine} newRoutine={props.newRoutine} updateRoutine={props.updateRoutine}/></div>
export default connect(mapStateToProps, mapDispatchToProps)(MainHolder);
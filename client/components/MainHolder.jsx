import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom'
import DaySelector from './DaySelector.jsx'
import WorkoutCreator from './WorkoutCreator.jsx'
import * as actions from '../actions/actions';


const mapStateToProps = state => (
     {
    newRoutine : state.wo.newRoutine,
    mRoutine : state.wo.mRoutine,
    tRoutine : state.wo.tRoutine,
    wRoutine : state.wo.wRoutine,
    thRoutine : state.wo.thRoutine,
    fRoutine : state.wo.fRoutine,
    satRoutine : state.wo.satRoutine,
    sunRoutine : state.wo.sunRoutine,
    stringRoutine : state.wo.stringRoutine
});

  const mapDispatchToProps = dispatch => ({
    updateRoutine : (input) => dispatch(actions.UPDATE_NEW_ROUTINE(input)),
    resetRoutine : () => dispatch(actions.RESET_ROUTINE()),
  });
const MainHolder = (props) => {
    
    return (
    <div>
       <DaySelector/>
       <WorkoutCreator stringRoutine = {props.stringRoutine} resetRoutine = {props.resetRoutine} 
       newRoutine={props.newRoutine} updateRoutine={props.updateRoutine} />
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHolder);
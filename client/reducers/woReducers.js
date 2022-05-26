import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
    newRoutine : [],
    mRoutine : [],
    tRoutine : [],
    wRoutine : [],
    thRoutine : [],
    fRoutine : [],
    satRoutine : [],
    sunRoutine : [],
    stringRoutine : ''
};

const woReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_NEW_ROUTINE: {
            let newAddition = action.payload
            let newRoutine = [] 
            newRoutine.push(...state.newRoutine)
            newRoutine.push(newAddition)
            let stringRoutine = newRoutine.reduce((full, curr) => full += ` ${curr.woName}: ${curr.set}X${curr.reps}@${curr.weight} `, '')

            return {
                ...state,
                newRoutine,
                stringRoutine
            }
        }
        case types.RESET_ROUTINE: {
            let newRoutine = [];
            let stringRoutine = ''
            return {
                ...state,
                newRoutine,
                stringRoutine
            }
        }
        default: {
            return state;
        }
    }
}
const reducers = combineReducers({wo : woReducers})
export default reducers;

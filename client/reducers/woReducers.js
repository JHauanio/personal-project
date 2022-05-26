import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
    newRoutine : [],
    stringRoutine : '',
    inDay : false,
    emptyDay : true,
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
        case types.SELECT_DAY: {
            console.log('payload', action.payload)
            if (action.payload === false){
                let inDay = false
                return {
                    ...state,
                    inDay
                }
            }
            console.log(action.payload)
            let inDay = {day : action.payload.day, routine : action.payload.routine}
            
            return {
                ...state,
                inDay
            }
        }
        case types.SEND_CREATOR: {
            console.log(action.payload)
            let emptyDay = (action.payload === false) ? true : false
            console.log(emptyDay)
            return {
                ...state,
                emptyDay
            }
        }
        default: {
            return state;
        }

    }
}
const reducers = combineReducers({wo : woReducers})
export default reducers;

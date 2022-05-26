import * as types from '../constants/actionTypes';

export const UPDATE_NEW_ROUTINE = (input) => ({
    type: types.UPDATE_NEW_ROUTINE,
    payload: input,
  });

export const RESET_ROUTINE = (input) => ({
  type: types.RESET_ROUTINE,
  payload: null,
});

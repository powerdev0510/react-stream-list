import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    data: []
}
export default handleActions ({
    [types.FEATCH_STREAM]: (state, action) => ({...state, data: action.payload})
}, initialState);
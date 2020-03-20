import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    data: [],
    isLoading: false,
    isFailed: false
}
export default handleActions ({
    [types.FEATCH_STREAM]: (state, action) => {
        return {...state, isLoading: false, isFailed: false, data: action.payload}
    },
    [types.FEATCH_REQUEST]: (state, action) => {
        return {...state, isLoading: true}
    },
    [types.FEATCH_FAILED]: (state, action) => {
        return {...state, isFailed: true}
    }
}, initialState);
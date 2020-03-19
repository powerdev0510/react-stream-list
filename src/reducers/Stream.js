import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    data: []
}
export default handleActions ({
    [types.FEATCH_STREAM]: (state, action) => {
        return {...state, data: action.payload}
    },
    [types.GET_ITEMS]: (state, action) => {
        console.log("=======action=======");
        console.log(action);
        return {
        ...state,
        data: state.data.filter(e => e.programType === action.payload.itemType)
        }
    }
}, initialState);
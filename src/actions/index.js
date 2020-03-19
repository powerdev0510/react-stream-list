import { createAction} from 'redux-actions';
import * as types from './ActionTypes';

export const fetchStreamSuccess = createAction(types.FEATCH_STREAM);
export const getItems = createAction(types.GET_ITEMS, (itemType) => ({itemType}));
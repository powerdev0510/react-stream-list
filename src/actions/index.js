import { createAction} from 'redux-actions';
import * as types from './ActionTypes';

export const fetchStreamSuccess = createAction(types.FEATCH_STREAM);
export const requestFetchStream = createAction(types.FEATCH_REQUEST);
export const failedFetchStream = createAction(types.FEATCH_FAILED);
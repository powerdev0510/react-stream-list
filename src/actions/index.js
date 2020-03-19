import { createAction} from 'redux-actions';
import * as types from './ActionTypes';

export const fetchStreamSuccess = createAction(types.FEATCH_STREAM);
export const getMovies = createAction(types.GET_MOVIES);
export const getSeries = createAction(types.GET_SERIES);
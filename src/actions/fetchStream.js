import { fetchStreamSuccess, failedFetchStream, requestFetchStream} from './index';

export function fetchStream() {
    return dispatch => {
		dispatch(requestFetchStream());
		fetch('http://localhost:8080/stream')
			.then(res => res.json())
			.then((data) => {
				dispatch(fetchStreamSuccess(data.entries));
			})
			.catch(
				dispatch(failedFetchStream())
			);
	};
}
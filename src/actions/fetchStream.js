import { fetchStreamSuccess } from './index';

export function fetchStream() {
    return dispatch => {
        fetch('http://localhost:8080/stream')
            .then(res => res.json())
            .then((data) => {
                dispatch(fetchStreamSuccess(data));
            })
            .catch(console.log);
    };
}
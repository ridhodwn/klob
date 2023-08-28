import { JOBS_FETCH_SUCCESS } from "../actions/action-type";

export const jobsFetchSuccess = payload => {
    return {
        type: JOBS_FETCH_SUCCESS,
        payload
    };
};

export const fetchJobs = () => {
    return (dispatch) => {
        return fetch('https://test-server-klob.onrender.com/fakeJob/agustus/2023')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then((data) => {
            dispatch(jobsFetchSuccess(data));
        });
    };
};
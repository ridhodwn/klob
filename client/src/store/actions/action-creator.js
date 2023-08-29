import { JOBS_FETCH_SUCCESS, JOBS_CREATE_SUCCESS, JOB_FETCH_BY_ID_SUCCESS } from "../actions/action-type";

export const jobsFetchSuccess = payload => {
    return {
        type: JOBS_FETCH_SUCCESS,
        payload
    };
};

export const jobsCreateSuccess = payload => {
    return {
        type: JOBS_CREATE_SUCCESS,
        payload
    };
};

export const jobFetchByIdSuccess = payload => {
    return {
        type: JOB_FETCH_BY_ID_SUCCESS,
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

export const createJob = (jobForm) => {
    return (dispatch) => {
        dispatch(jobsCreateSuccess(jobForm));
    };
};

export const fetchJobById = (id) => {
    return (dispatch) => {
        dispatch(jobFetchByIdSuccess(id));
    };
};
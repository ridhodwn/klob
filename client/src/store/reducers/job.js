import { JOBS_FETCH_SUCCESS, JOBS_CREATE_SUCCESS, JOB_FETCH_BY_ID_SUCCESS } from "../actions/action-type";

const intialState = {
    jobs: localStorage ? JSON.parse(localStorage.getItem('jobs')) : [],
    job: {}
};

function jobReducer(state = intialState, action) {
    switch (action.type) {
        case JOBS_FETCH_SUCCESS:
            localStorage.setItem('jobs', JSON.stringify(action.payload))
            return {
                ...state,
                jobs: action.payload
            };
        case JOBS_CREATE_SUCCESS:
            localStorage.setItem('jobs', JSON.stringify([...state.jobs, action.payload]))
            return {
                ...state,
                jobs: [...state.jobs, action.payload] 
            };
        case JOB_FETCH_BY_ID_SUCCESS:
            return {
                ...state,
                job: state.jobs.find(el => el.jobVacancyCode === action.payload)
            };
        default:
            return state
    }
}

export default jobReducer;
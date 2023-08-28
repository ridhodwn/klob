import { JOBS_FETCH_SUCCESS, JOBS_CREATE_SUCCESS } from "../actions/action-type";

const intialState = {
    jobs: localStorage ? JSON.parse(localStorage.getItem('jobs')) : []
};

function jobReducer(state = intialState, action) {
    switch (action.type) {
        case JOBS_FETCH_SUCCESS:
            localStorage.setItem('jobs', JSON.stringify(action.payload))
            return {
                jobs: action.payload
            };
        case JOBS_CREATE_SUCCESS:
            localStorage.setItem('jobs', JSON.stringify([...state.jobs, action.payload]))
            return {
                jobs: [...state.jobs, action.payload] 
            };
        default:
            return state
    }
}

export default jobReducer;
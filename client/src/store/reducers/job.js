import { JOBS_FETCH_SUCCESS, JOBS_CREATE_SUCCESS, JOB_FETCH_BY_ID_SUCCESS, ADD_LAMARAN_SUCCESS, DELETE_LAMARAN_SUCCESS } from "../actions/action-type";

const intialState = {
    jobs: (localStorage.getItem("jobs") !== null) ? [] : JSON.parse(localStorage.getItem('jobs')),
    job: {},
    lamaran: (localStorage.getItem("lamaran") !== null) ? [] : JSON.parse(localStorage.getItem('lamaran')),
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
        case ADD_LAMARAN_SUCCESS:
            if(!state.lamaran) {
                localStorage.setItem('lamaran', JSON.stringify([state.jobs.find(el => el.jobVacancyCode === action.payload)]))
            } else {
                localStorage.setItem('lamaran', JSON.stringify([...state.lamaran, state.jobs.find(el => el.jobVacancyCode === action.payload)]))
            }
            return {
                ...state,
                lamaran: !state.lamaran ? [state.jobs.find(el => el.jobVacancyCode === action.payload)] : [...state.lamaran, state.jobs.find(el => el.jobVacancyCode === action.payload)]
            };
        case DELETE_LAMARAN_SUCCESS:
                localStorage.setItem('lamaran', JSON.stringify(state.lamaran.filter(el => el.jobVacancyCode !== action.payload)))
            return {
                ...state,
                lamaran: state.lamaran.filter(el => el.jobVacancyCode !== action.payload)
            };
        default:
            return state
    }
}

export default jobReducer;
import { JOBS_FETCH_SUCCESS } from "../actions/action-type";

const intialState = {
    jobs: []
};

function jobReducer(state = intialState, action) {
    switch (action.type) {
        case JOBS_FETCH_SUCCESS:
            return {
                ...state,
                jobs: action.payload
            };
        default:
            return state
    }
}

export default jobReducer;
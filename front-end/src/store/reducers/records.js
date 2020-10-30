import { LOAD_RECORDS } from '../actionTypes';

const records = (state = [], action) => {
    switch(action.type) {
        case LOAD_RECORDS:
            return [...action.records];
        default:
            return state;
    }
};

export default records;
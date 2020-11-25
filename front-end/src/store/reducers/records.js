import { LOAD_RECORDS, ADD_RECORD } from '../actionTypes';

const records = (state = [], action) => {
    switch(action.type) {
        case LOAD_RECORDS:
            return [...action.records];
        case ADD_RECORD:
            return [...state, action.payload]
        default:
            return state;
    }
};

export default records;
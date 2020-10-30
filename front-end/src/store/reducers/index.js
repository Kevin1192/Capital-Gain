import { combineReducers } from 'redux';
import currentUser from './currentUsers';
import errors from './errors';
import records  from './records';

const rootReducer = combineReducers({
    currentUser,
    errors,
    records
});

export default rootReducer;

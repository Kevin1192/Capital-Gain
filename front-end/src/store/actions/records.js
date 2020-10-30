import { apiCall } from '../../library/api';

import {addError } from './errors';
import { LOAD_RECORDS, REMOVE_RECORDS } from '../actionTypes';

export const loadRecords = records => ({
    type: LOAD_RECORDS,
    records,
});


export const fetchRecords = () => {
    return dispatch => {
        return apiCall("get", "/api/records")
        .then(res => {
            dispatch(loadRecords(res));
        })
        .catch(err => {
            dispatch(addError(err.message));
        });

    };
};
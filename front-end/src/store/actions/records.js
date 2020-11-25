import { apiCall } from '../../library/api';

import {addError } from './errors';
import { LOAD_RECORDS, REMOVE_RECORDS, ADD_RECORD } from '../actionTypes';

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

export const addRecord = (record) => ({
    type: ADD_RECORD,
    payload: record,
})

export const addRecordToDb = (record, id) => {
    return dispatch => {
        return apiCall('post', `/api/users/${id}/records/`, record)
        .then(res => {
            dispatch(addRecord(res))
        })
        .catch(err => {
            dispatch(addError(err.message))
        })
    }
}
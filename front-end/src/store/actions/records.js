import { apiCall } from '../../library/api';

import {addError } from './errors';
import { LOAD_RECORDS, REMOVE_RECORDS, ADD_RECORD } from '../actionTypes';

export const loadRecords = records => ({
    type: LOAD_RECORDS,
    records,
});


export const fetchRecords = (id) => {
    return dispatch => {
        const localHost = 'http://localhost:3001';
        const url = `${localHost}/api/users/${id}/records`; 
        return apiCall("get", url)
        .then(res => {
            console.log('log fetch records', res)
            dispatch(loadRecords(res));
            return res;
        })
        .catch(err => {
            let message = err.message ? err.message : 'something went wrong';
            dispatch(addError(message));
        });

    };
};

export const addRecord = (record) => ({
    type: ADD_RECORD,
    payload: record,
})

export const addRecordToDb = (record, id) => {
    return dispatch => {
        const localHost = 'http://localhost:3001';
        const url = `${localHost}/api/users/${id}/records`; 
        return apiCall("post", url, record)
        .then(res => {
            dispatch(addRecord(res))
            return res;
        })
        .catch(err => {
            console.log(err, 'err');
            if (!err) return;
            let message = err.message ? err.message : 'something went wrong' 
            dispatch(addError(message))
        })
    }
}
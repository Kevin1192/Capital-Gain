import { apiCall } from '../../library/api';

import {addError } from './errors';
import { LOAD_RECORDS, ADD_RECORD } from '../actionTypes';

export const loadRecords = records => ({
    type: LOAD_RECORDS,
    records,
});


export const fetchRecords = (id) => {
    return dispatch => {
        if (!id) return dispatch(loadRecords([]));
        const localHost = 'http://localhost:3001';
        const url = `${localHost}/api/users/${id}/records`; 
        return apiCall("get", url)
        .then(res => {
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
            if (!err) return;
            let message = err.message ? err.message : 'something went wrong' 
            dispatch(addError(message))
        })
    }
}

export const removeRecordAndUpdate = (id, recordId) => {
    return dispatch => {
        if (!id || !recordId) return;
        const localHost = 'http://localhost:3001';
        const url = `${localHost}/api/users/${id}/records/${recordId}`;
        return apiCall('delete', url)
        .then( () => {
            apiCall('get', `${localHost}/api/users/${id}/records`)
            .then(res => {
                dispatch(loadRecords(res))
                return res;
            })
        })
        .catch(err => {
            let message = err.message ? err.message : 'something went wrong';
            dispatch(addError(message));
    })
}
}
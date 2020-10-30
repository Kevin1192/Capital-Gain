import { apiCall, setTokenHeader } from '../../library/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { removeError } from './errors';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        setTokenHeader(false);
        dispatch(setCurrentUser({}));
    }
}


export const authUser = (type, userData) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/auth/${type}`, userData)
            .then(({ token, ...user }) => {
                localStorage.setItem("jwtToken", token);
                setTokenHeader(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
            })
        })
    }
}
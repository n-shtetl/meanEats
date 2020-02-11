export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_USERS = "RECEIVE USERS"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"
import * as SessionApiUtil from '../util/session_api_util';



const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const clearErrors = {
    type: CLEAR_ERRORS
}

export const fetchUsers = () => dispatch => {
    return SessionApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
}

export const login = user => dispatch => {
    return SessionApiUtil.login(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
        .fail(errors => dispatch(receiveErrors(errors)))
};

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors)))
};
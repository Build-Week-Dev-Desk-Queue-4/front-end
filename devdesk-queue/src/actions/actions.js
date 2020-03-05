import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_USER_START = "GET_USER_START"; //using loading spinners?
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const UPDATE_USER_START = "UPDATE_USER_START"; //using loading spinners?
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const updateUser = userInfo => dispatch => {
    dispatch({type: GET_USER_SUCCESS, payload: userInfo});
}
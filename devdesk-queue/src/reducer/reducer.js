import {
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
  } from "../actions/actions";
import { useReducer } from "react";

const initialState = {
    user: {
        id: '',
        image: '',
        username: '',
        first_name: '',
        last_name: '',
        role: '',
        email: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return {};
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        case GET_USER_FAILURE:
            return {};
        case UPDATE_USER_START:
            return {};
        case UPDATE_USER_SUCCESS:
            return {};
        case UPDATE_USER_FAILURE:
            return {};
        default:
            return state;
    }
}

export default reducer;
import {profileApi, usersApi} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi man", likesCount: 2},
        {id: 2, message: "It is Ivan", likesCount: 12},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [newPost,...state.posts],
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

//thunk
export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }

        });
}

export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}


export default profileReducer;
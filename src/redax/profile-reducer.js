import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 3, message: 'Merhaba', likesCount: 11},
        {id: 4, message: 'let s go', likesCount: 11},
        {id: 5, message: 'Dance with me', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText : ' '
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p=>p.id != action.post.id)
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
                dispatch (setUserProfile(response.data));
    }

export const getStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId)
            dispatch (setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
           if (response.data.resultCode === 0){
            dispatch (setStatus(status));
           }
}



// export const getUserProfile = (userId) => (dispatch) => {
//     usersAPI.getProfile(userId)
//         .then(response => {
//             dispatch (setUserProfile(response.data));
//         });
// }
//
// export const getStatus = (userId) => (dispatch) => {
//     profileAPI.getStatus(userId)
//         .then(response => {
//             dispatch (setStatus(response.data));
//         });
// }
//
// export const updateStatus = (status) => (dispatch) => {
//     profileAPI.updateStatus(status)
//         .then(response => {
//             if (response.data.resultCode === 0){
//                 dispatch (setStatus(status));
//             }
//         });
// }


export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
























//FORM


//
// import {profileAPI, usersAPI} from "../api/api";
//
// const ADD_POST = 'ADD-POST';
// const SET_USER_PROFILE = 'SET_USER_PROFILE';
// const SET_STATUS = 'SET_STATUS';
//
// let initialState = {
//     posts: [
//         {id: 1, message: 'Hi, how are you', likesCount: 12},
//         {id: 2, message: 'Its my first post', likesCount: 11},
//         {id: 3, message: 'Merhaba', likesCount: 11},
//         {id: 4, message: 'let s go', likesCount: 11},
//         {id: 5, message: 'Dance with me', likesCount: 11}
//     ],
//     profile: null,
//     status: ""
// };
//
// const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_POST: {
//             let newPost = {
//                 id: 5,
//                 message: action.newPostText,
//                 likesCount: 0
//             };
//             return {
//                 ...state,
//                 posts: [...state.posts, newPost],
//                 newPostText : ' '
//             };
//         }
//
//
//         case SET_STATUS: {
//             return {
//                 ...state,
//                 status: action.status
//             }
//         }
//
//         case SET_USER_PROFILE: {
//             return {...state, profile: action.profile
//             }
//         }
//         default:
//             return state;
//
//     }
// }
//
// export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText})
// export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
// export const setStatus = (status) => ({type: SET_STATUS, status})
//
// export const getUserProfile = (userId) => (dispatch) => {
//     usersAPI.getProfile(userId)
//         .then(response => {
//             dispatch (setUserProfile(response.data));
//         });
// }
//
// export const getStatus = (userId) => (dispatch) => {
//     profileAPI.getStatus(userId)
//         .then(response => {
//             debugger
//             dispatch (setStatus(response.data));
//         });
// }
//
// export const updateStatus = (status) => (dispatch) => {
//     profileAPI.updateStatus(status)
//         .then(response => {
//             if (response.data.resultCode === 0){
//                 dispatch (setStatus(status));
//             }
//         });
// }
//
//
//
// export default profileReducer;
import {authAPI} from "../api/api";
// import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload, //в payload имеется в виду true
            }

        default:
            return state;

    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
}) //у нас есть редьюсер, акшн креатор, он диспатчит акш. в этом акш сидят id, email, login, isAuth

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()   //возвращаем промис
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
    ;
}


//
// export const getAuthUserData = () => (dispatch) => {
//     return authAPI.me()   //возвращаем промис
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 let {id, email, login} = response.data.data;
//                 dispatch (setAuthUserData (id, email, login, true));
//             }
//         });
// }


export const login = (email, password, rememberMe) => async (dispatch) => { //логинимся
    let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            // else {
            //let message = response.data.message.length>0 ? response.data.message[0]:"some error"                                    //если длина месендж больше 0, то мы в качестве месенджа, который покажем на форуме возьмем первоенулевое смс, иначе покажем соме еррор
            //dispatch(stopSubmit("login", {error: message}))
            // }
}

export const logout = () => async (dispatch) => {  //вылогинились
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
}

export default authReducer;
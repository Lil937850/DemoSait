

import {getAuthUserData} from "./auth-reducer";
// import {stopSubmit} from "redux-form"

const INITIALIZED_SUCCESS= 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false   //сначала приложение неинициализировано
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true //делаем копию стейта и меняем initialized
            }

        default:
            return state;

    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) //у нас есть редьюсер, акшн креатор, он диспатчит акш. в этом акш сидят id, email, login, isAuth

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())  //диспатчим получение авторизационных данных // и когда данные будут получены, то мы д. задипатчить initializedSuccess
    Promise.all([promise])  //перечисляем все промисы, которые будут идти параллельно. дождались и проинициализировались
        .then(()=>{
        dispatch(initializedSuccess())
    })
}


export default appReducer;
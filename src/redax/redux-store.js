import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;     //сторе с расширением от гуглхром
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;












//
// import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";
// import usersReducer from "./users-reducer";
// import authReducer from "./auth-reducer";
// import thunkMiddleware from "redux-thunk";
// import {reducer as formReducer} from 'redux-form';
//
//
// let reducers = combineReducers({
//     profilePage:profileReducer,
//     dialogsPage:dialogsReducer,
//     sidebar:sidebarReducer,
//     usersPage: usersReducer,
//     auth: authReducer,
//     form: formReducer
// });
//
// let store = createStore (reducers, applyMiddleware(thunkMiddleware));
//
// window.store = store;
//
// export default store;








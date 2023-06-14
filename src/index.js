import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redax/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import SamuraiJSApp from "./App";
// import {create} from "axios";

//добавление при помощи нативного js настоящ дом элемент
// let h1 = document.createElement("h1")  //дом элемент
// h1.innerHTML = "Hello"  //нативный js элемент, объект дома настоящ
// document.querySelector("body").appendChild(h1)

// setInterval(()=>{
//     store.dispatch({type:"FAKE"})
// },1000)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SamuraiJSApp/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// let rerenderEntireTree = (state) => {
//     root.render(
//         <BrowserRouter>
//             <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
//         </BrowserRouter>
//     );
// }
//
// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });
//
// store.subscribe(rerenderEntireTree);
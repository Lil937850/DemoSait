import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 3, message: 'Merhaba', likesCount: 11},
        {id: 4, message: 'let s go', likesCount: 11},
        {id: 5, message: 'Dance with me', likesCount: 11}
    ]
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("hello")

    //2. action
    let newState = profileReducer(state, action)  //вызываем profileReducer и проверяем, что newState при переданном старом стейте и при переданном экшне, такой, какой мы ожидаем получить
//3.expectation ожидаем, что в нью стейте будет пост с длиной 5
    expect (newState.posts.length).toBe(5)
});



test('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("hello")

    //2. action
    let newState = profileReducer(state, action)  //вызываем profileReducer и проверяем, что newState при переданном старом стейте и при переданном экшне, такой, какой мы ожидаем получить
//3.expectation ожидаем, что в нью стейте будет пост с длиной 5
    expect (newState.posts[4].message).toBe("")
});



test('after deleting length of message should be decrement', () => {
    //1. test data
    let action = deletePost(1) //хотим запустить делитрост с айдишником 1

    //2. action
    let newState = profileReducer(state, action)  //вызываем profileReducer и проверяем, что newState при переданном старом стейте и при переданном экшне, такой, какой мы ожидаем получить
//3.expectation ожидаем, что в нью стейте будет пост с длиной 5
    expect (newState.posts.length).toBe(3)
});


test('after deleting length sholdnt be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(10000) //хотим запустить делитрост с айдишником 10000но его по факту нет

    //2. action
    let newState = profileReducer(state, action)  //вызываем profileReducer и проверяем, что newState при переданном старом стейте и при переданном экшне, такой, какой мы ожидаем получить
//3.expectation ожидаем, что в нью стейте будет пост с длиной 5
    expect (newState.posts.length).toBe(4)
});

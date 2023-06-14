
//селектор в данном случае достают из стейта какие-то данные


import {createSelector} from "reselect";

const getUsersSelector = (state) => {  //примитивный селектор, который возвращает из стейта юзеров
    return state.usersPage.users
}

export const getUsers = createSelector (getUsersSelector, (users)=>{   //селектор, который занимается фильтрацией. внутри createSelector передаем ф-ю, которая будет что-то выбирать из стейта. сюда придут юзеры из более примитивного селектора. первым параметром передаем тот селектор getUsersSelector, который будет исполььзоваться, чтобы получить значения юзерс, чтобы потом закинуть их сюда же (users)
    return users.filter(u=>true)   //логика селектора
})

// export const getUsersSuperSelector = createSelector (getUsers,(users)=>{     //внутри createSelector передаем ф-ю, которая будет что-то выбирать из стейта. сюда придут юзеры из более примитивного селектора. первым параметром передаем тот селектор getUsers, который будет исполььзоваться, чтобы получить значения юзерс, чтобы потом закинуть их сюда же (users)
//     return users.filter(u=>true)   //логика селектора
// })



// export const getUsers = (state) => {
//     return state.usersPage.users
// }

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}


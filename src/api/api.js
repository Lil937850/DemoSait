import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2eaa3d4d-4cb9-4146-871a-19abe3a12269"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn ('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            // .then(response => {
            //     return response.data
            // })
    }
}

export const authAPI = { //авторизация
     me() {
    return instance.get(`auth/me` )
},
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe} ) //вместе с пост запросом`auth/login`отправляем на сервак данные {email, password, rememberMe}
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


//
// deleteUsers () {
//     return axios.delete(`follow`)
//         .then(response=>{
//             return response.data
//         })
// },
//
// postUsers () {
//     return axios.post(`follow`)
//         .then(response=>{
//             return response.data
//         })
// }







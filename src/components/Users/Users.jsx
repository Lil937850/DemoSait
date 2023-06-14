import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({pageSize, totalItemsCount, totalUsersCount, currentPage, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                                  key={u.id}/>)
            }
        </div>
    </div>
}


export default Users


// <div>
// {u.followed
//         ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
//             props.toggleFollowingProgress(true, u.id)
//             usersAPI.unfollow(u.id)
//             axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//                 withCredentials: true,
//                 headers: {
//                     "API-KEY":"2eaa3d4d-4cb9-4146-871a-19abe3a12269"
//                 }
//             })
//                 .then(responce => {
//                     if (responce.data.resultCode == 0) {
//                         props.unfollow(u.id);
//                     }
//                     props.toggleFollowingProgress(false, u.id)
//                 });

// }}> Unfollow </button>
// : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
// props.toggleFollowingProgress(true, u.id)
// usersAPI.follow(u.id)

// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
//     withCredentials: true,
//     headers: {
//         "API-KEY":"2eaa3d4d-4cb9-4146-871a-19abe3a12269"
//     }
// })
//     .then(responce => {
//         if (responce.data.resultCode == 0) {
//             props.follow(u.id);
//         }
//         props.toggleFollowingProgress(false, u.id)
//     });
//         }}> Follow </button>}
// </div>
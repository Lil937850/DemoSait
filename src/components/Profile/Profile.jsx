import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";


const Profile = (props) => {
    console.log("profike")
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile




//
//
// import React from "react";
// import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import MyPostsContainer from "./My posts/MyPostsContainer";
//
//
// const Profile = (props) => {
//     debugger
//     return (
//         <div>
//             <ProfileInfo/>
//             //             <MyPostsContainer store={props.store} />
//         </div>
//     )
// }
//
// export default Profile
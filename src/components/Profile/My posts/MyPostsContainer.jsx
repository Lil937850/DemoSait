import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>{(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }
//             return <MyPosts updateNewPostText={onPostChange}
//                 addPost={addPost}
//                 posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText}
//             /> }
//         }</StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost:() => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer


// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }
//
//     return (<MyPosts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}
//     />)
// }
//
// export default MyPostsContainer





//FORM



// import React from "react";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
// import MyPosts from "./MyPosts";
// import {connect} from "react-redux";
//
// let mapStateToProps = (state) => {
//     return {
//         posts:state.profilePage.posts,
//         newPostText:state.profilePage.newPostText
//     }
// }
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost:(newPostText) => {
//             dispatch(addPostActionCreator(newPostText));
//         },
//     }
// }
//
// const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
//
// export default MyPostsContainer

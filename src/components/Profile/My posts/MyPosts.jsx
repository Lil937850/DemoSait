import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = React.memo (props => {
    //console.log("render gy")

    let postsElements = [...props.posts].reverse(). map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;


//FORM

//
//
// import React from "react";
// import s from './MyPosts.module.css';
// import Post from "./Post/Post";
// import {Field} from "formik";
//
// const MyPosts = (props) => {
//
//     let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
//     let newPostElement = React.createRef();
//
//     let onAddPost = (values) => {
//         props.addPost(values.newPostText);
//     }
//
//
//     return (
//         <div className={s.postsBlock}>
//             <h3> My posts </h3>
//
//             <div className={s.posts}>
//                 {postsElements}
//             </div>
//             <addNewPostFormRedux onSubmit={onAddPost}/>
//         </div>
//     )
// }
//

//const maxLength10=maxLengthCreator(10)
//
// const addNewPostForm =() =>{
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={Textarea} name="newPostText" placeholder={"Post message"}
//                 validate={[required,maxLength10]}/>
//             </div>
//             <div>
//                 <button> Add post</button>
//             </div>
//         </form>
//     )
// }
//
// let addNewPostFormRedux=reduxForm({form:"ProfileAddNewPostForm"})(addNewPostForm)
//
//
// export default MyPosts;
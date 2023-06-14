import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return  (
        <div className={s.item}>
            <img src={'https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg'}/>
            {props.message}
            <div>
                <span> Like </span> {props.likesCount}
            </div>
        </div >
    )
}

export default Post
import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

     return (
        <div>
        {/*<div className={s.profile}>*/}
        {/*    <img src='https://vsegda-pomnim.com/uploads/posts/2022-04/1651036220_20-vsegda-pomnim-com-p-lazurnii-tsvet-morya-foto-20.jpg'/>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
    )
}

export default ProfileInfo



// profile, status, updateStatus
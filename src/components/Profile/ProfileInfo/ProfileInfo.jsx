import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";


export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/css/img_5terre.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava +descr
            </div>
        </div>
    );
}
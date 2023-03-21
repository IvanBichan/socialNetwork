import React from 'react';
import s from "./Post.module.css";

export const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src='https://wallpaperaccess.com/full/813299.jpg'/>
                    {props.message}
                    <div>
                        <span>like</span>  {props.likesCount}
                    </div>
                </div>
    );
}
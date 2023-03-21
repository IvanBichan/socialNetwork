import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            {/*<MyPostsContainer store={props.store} />*/}
            <MyPostsContainer />
        </div>
    );
}



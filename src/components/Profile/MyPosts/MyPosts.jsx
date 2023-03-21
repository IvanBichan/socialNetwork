import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../redux/profile-reducer";





export const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
        //let text = newPostElement.current.value;
        //props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        /*let action = upDateNewPostTextActionCreator(text)
        props.dispatch(action)*/

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}
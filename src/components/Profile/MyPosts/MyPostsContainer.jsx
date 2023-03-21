import React from 'react';
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


/*
export const MyPostsContainer = (props) => {

    // let state = props.store.getState();


    // let addPost = () => {
    //     //let text = newPostElement.current.value;
    //     props.store.dispatch(addPostActionCreator())
    // }
    //
    // let onPostChange = (text) => {
    //     let action = upDateNewPostTextActionCreator(text)
    //     props.store.dispatch(action)
    // }

    return (
        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState();
                let addPost = () => {
                    //let text = newPostElement.current.value;
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    let action = upDateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    );
}
*/


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = upDateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
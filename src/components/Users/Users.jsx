import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/images-png.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return (<span key={p} className={props.currentPage === p && styles.selectPage}
                              onClick={() => {
                                  props.onPageChanged(p)
                              }}> {p} </span>)
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials:true,
                                        headers:{
                                            "API-KEY":"65d2d4b3-9c6d-4a67-99a8-50a467fd44da"
                                        },
                                    })
                                        .then(response => {
                                            if(response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                        });



                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                        withCredentials:true,
                                        headers:{
                                            "API-KEY":"65d2d4b3-9c6d-4a67-99a8-50a467fd44da"
                                        },
                                    })
                                        .then(response => {
                                            if(response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                        });



                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}
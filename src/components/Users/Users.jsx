import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/images-png.png";
import {NavLink} from "react-router-dom";

export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return (<span key={p} className={props.currentPage === p ? styles.selectPage : undefined}
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
                                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}
                                     alt={'user photo'}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}
                                >Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}
                                >Follow</button>}
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
import React from 'react';
import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow,} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {Navigate} from "react-router-dom";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}



export const UsersContainer = compose(
    /*WithAuthRedirect,*/
    connect(mapStateToProps, {
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        follow,
    })
)(UsersAPIContainer)
import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    followSuccess,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow,
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";


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
                   toggleFollowingProgress = {this.props.toggleFollowingProgress}
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
        followingInProgress:state.usersPage.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    followSuccess,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
})(UsersAPIContainer)
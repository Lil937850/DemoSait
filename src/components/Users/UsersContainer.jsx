import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPages,
    unfollow, toggleFollowingProgress, requestUsers
} from '../../redax/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redax/users-selectors";



class UsersContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    //         }

    componentDidMount() {
        const {currentPage,pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);

        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    };


    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
        // this.props.setCurrentPages(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader />: null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                   // toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {  //срабатывает всегда
    return {
        // users: getUsersSuperSelector(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPagesAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


// export default withAuthRedirect (connect(mapStateToProps,
//     {follow, unfollow,
//         setCurrentPages, toggleFollowingProgress, getUsers}) (UsersContainer));

export default compose(
    // withAuthRedirect, //защищаем. тип пока не залогинился. не зайдешь
    connect(mapStateToProps,
        {follow, unfollow,
            setCurrentPages, toggleFollowingProgress, requestUsers: requestUsers})
)(UsersContainer)
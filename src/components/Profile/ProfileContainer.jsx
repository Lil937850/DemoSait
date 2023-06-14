import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redax/profile-reducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (!userId) {
            userId= this.props.authorizedId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile (userId);
        // setTimeout (() => {
            this.props.getStatus(userId)
        // }, 1000)
    }

    render() {
        //console.log("RENDER PROFILE")
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => {
    //console.log('mapStateToProps PROFILE')
    return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedId:state.auth.id, //
    isAuth: state.auth.isAuth //из стейта берем isAuth, чтобы знать авторизованы мы или нет
})};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect (ProfileContainer);
//

//
// let withUrlDataContainerComponent = withRouter (AuthRedirectComponent);
//
// export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);




















// export function withRouter(Children){
//     return(props)=>{
//
//         const match  = {params: useParams()};
//         return <Children {...props}  match = {match}/>
//     }
// }
//
// class ProfileContainer extends React.Component {
//
//     componentDidMount() {
//         debugger
//         let userId = this.props.match.params.userId;
//         if (!userId) {
//             userId = 2;
//         }
//         debugger
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ + userId`)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             });
//     }
//
//     render() {
//         return (
//             <Profile {...this.props} profile={this.props.profile}/>
//         )
//     }
// }
//
// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// });
//
// let withUrlDataContainerComponent = withRouter (ProfileContainer);
//
// export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);

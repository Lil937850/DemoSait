import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redax/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redax/redux-store";
import {withSuspense} from "./hoc/withSuspense";

 // import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //ленивая загрузка
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); //ленивая загрузка
const DialogContainerWithSuspense = withSuspense(DialogsContainer)
const ProfileContainerWithSuspense = withSuspense(ProfileContainer)

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

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp ()
    }

    render() {
        if (!this.props.initialized) {//если мы не проинициализированы, то покажи прелоудер

        return  <Preloader/> } //мы будем возвращать разметку только когда проинициализировались

        return (

            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    {/*<React.Suspense fallback={<Preloader/>}>*/}
                    {/*    <section>*/}
                    <Routes>
                        {/*<Route path='/dialogs' element={<DialogsContainer/>}/>*/}
                        <Route path='/dialogs' element={<DialogContainerWithSuspense/>}/>
                        <Route path='/profile/*' element={<ProfileContainerWithSuspense/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        {/*<Route path='/:userId?' element={<ProfileContainer />}/>*/}
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    {/*    </section>*/}
                    {/*</React.Suspense>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized  //наш апп получ инфу инцилизировано или нет
})

let AppContainer = compose(
    withRouter,
    // withAuthRedirect,
    connect(mapStateToProps, {initializeApp})
)(App)


const SamuraiJSApp = (props) => {
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
 export default SamuraiJSApp





// import React from "react";
// import './App.css';
// import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Profile/Profile";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Music from "./components/Music/Music";
// import News from "./components/News/News";
// import Settings from "./components/Settings/Settings";
// import Sait from "./components/Saitbar/Sait";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// // import {updateNewPostText} from "./redax/store";
//
// const App = (props) => {
//
//     return (
//         <BrowserRouter>
//             <div className={'app-wrapper'}>
//                 <Header/>
//                 <Navbar/>
//                 <div className={'app-wrapper-content'}>
//                     <Routes>
//                         {/*<Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
//                         <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}/>}/>*/}
//
//                         <Route path='/dialogs' element={<DialogsContainer />}/>
//                         <Route path='/profile' element={<Profile />}/>
//                         {/*<Route path='/dialogs' element={<DialogsContainer store={props.store}/>}/>*/}
//                         {/*<Route path='/profile' element={<Profile store={props.store}/>}/>*/}
//                         <Route path='/news' element={<News/>}/>
//                         <Route path='/music' element={<Music/>}/>
//                         <Route path='/settings' element={<Settings/>}/>
//                         <Route path='/sait' element={<Sait/>}/>
//                     </Routes>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }
// export default App
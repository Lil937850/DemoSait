import React from 'react'
import {connect} from "react-redux";
import {login} from "../../redax/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import {createField} from "../common/FormsControls/FormsControls";

const LoginForm = (error) => {
    return (
        <form>
            <div>
                <input placeholder={"Email"} />
            </div>
            <div>
                <input placeholder={"Password"} />
            </div>
            <div>
                <input type={"checkbox"}/>remember me
            </div>
            {error && <div className={style.formSummaryError}> //если придет ошибка, то покажи на сайте уведомление error
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const Login = (props) => {

    const onSubmit = (formData) => {
         props.login (formData.email,formData.password, formData.rememberMe )}

    // if (!props.isAuth) return <Navigate to={"/profile"}/>
    return <div>
        <h1>LOGIN</h1>
       <LoginForm onSubmit={onSubmit}/>
    </div>
}

 // const mapStateToProps = (state) =>({
 //     isAuth:state.auth.isAuth
 // })

export default connect (null, {login})(Login); //колбэк отдельно, который внутри диспатчит вызов санккреатора










// import React from 'react'
// import {Field, reduxForm} from "redux-form"
//
// const LoginForm = ({handleSubmit, error}) => {
//     return (
//         <form onSubmit={handleSubmit}>
// {createField ("Email", "email", [required], Input)}
// {createField ("Password", "password", [required], Input, {type: "password"})}
// {createField (null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
// {error && <div className={style.formSummaryError}> //если придет ошибка, то покажи на сайте уведомление error
//     {error}
// </div>
// }
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)
//
// const Login = () => {
//     const onSubmit = (formData) => {
//         props.login (formData.email,formData.password, formData.rememberMe )
//     }
//  if (!props.isAuth) return <Navigate to={"/profile"}/>
// }
//     return <div>
//         <h1>LOGIN</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// }
//

// const mapStateToProps = (state) =>({
//     isAuth:state.auth.isAuth
// })
//
// export default connect (mapStateToProps, {login})(Login)
import React from "react";
import s from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

/*
    let dialogsElements = props.dialogs.map ( d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.messages.map (m => <Message message={m.message} />)
*/

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />)

    let messagesElements = state.messages.map (m => <Message message={m.message} key={m.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyCreator (body))
    }

    if (!props.isAuth) return <Navigate to={"/login"}/>


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

                {/*<DialogItem name={dialogs [0].name} id={dialogs [0].id} />
                <DialogItem name={dialogs [1].name} id={dialogs [1].id} />
                <DialogItem name={dialogs [2].name} id={dialogs [2].id} />*/}

                {/*<div className={s.dialog + '' + s.active}>*/}
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'> </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

                {/* <Message message={messages [0].message}  />
                <Message message={messages [1].message}  />*/}

            </div>
        </div>

    )

}


export default Dialogs


















//FORM

//
// import React from "react";
// import s from './Dialogs.module.css';
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
// import {Navigate} from "react-router-dom";
// import {Field} from "formik";
//
//
// const Dialogs = (props) => {
//
//        let state = props.dialogsPage
//
//     let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
//
//     let messagesElements = state.messages.map (m => <Message message={m.message} key={m.id}/>)
//
//     let newMessageBody = state.newMessageBody
//
//
//     let addNewMessage = (values) => {
//         props.sendMessage(values.newMessageBody)
//        }
//
//     if (!props.isAuth) return <Navigate to={"/login"}/>
//
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//
//                 {dialogsElements}
//
//             </div>
//             <div className={s.messages}>
//
//                 <div>{messagesElements}</div>
//
//             </div>
//             <AddMessageFormRedux onSubmit={addNewMessage}/>
//         </div>
//
//     )
//
// }
//
//const maxLength30=maxLengthCreator(30)
// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={Textarea}
//                        validate={[required, maxLength30]}
//                        placeholder={'Enter your message'} name={"newMessageBody"}/>
//                 </div>
//             <div><button>Send</button></div>
//         </form>
//     )
// }
//
// const AddMessageFormRedux=reduxForm ({form:"dialogAddMessageForm"})(AddMessageForm)
//
// export default Dialogs
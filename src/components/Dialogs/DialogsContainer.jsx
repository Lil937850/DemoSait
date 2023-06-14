import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = () => {
//       return <StoreContext.Consumer>
//             { store => {
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={store.getState().dialogsPage}/>
//         }
//     }
//       </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
      return {
            dialogsPage: state.dialogsPage,
      }
}

let mapDispatchToProps = (dispatch) => {
      return {
            sendMessage: () => {
                  dispatch(sendMessageCreator());
            },
            updateNewMessageBody: (body) => {
                  dispatch(updateNewMessageBodyCreator(body));
            }
      }
}

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect (Dialogs);
//
// const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer





// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator (body))
//     }
//
//     return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//                      dialogsPage={state}/>)
// }
//
// export default DialogsContainer




//FORM


// import React from "react";
// import {sendMessageCreator} from "../../redax/dialogs-reducer";
// import Dialogs from "./Dialogs";
// import {connect} from "react-redux";
// import {Navigate} from "react-router-dom";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
// import {compose} from "redux";
//
//
// let mapStateToProps = (state) => {
//       return {
//             dialogsPage: state.dialogsPage,
//       }
// }
//
// let mapDispatchToProps = (dispatch) => {
//       return {
//             sendMessage: (newMessageBody) => {
//                   dispatch(sendMessageCreator(newMessageBody));
//             }
//       }
// }
//
// export default compose(
//     connect (mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs)

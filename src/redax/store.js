import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 11},
                {id: 3, message: 'Merhaba', likesCount: 11},
                {id: 4, message: 'let s go', likesCount: 11},
                {id: 5, message: 'Dance with me', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'how is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        debugger
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // _addPost() {
    //     debugger
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ' ';
    //     this._callSubscriber(this._state);
    // },
    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

        }
}






// dispatch(action) {
//     if (action.type === 'ADD-POST') {
//         this.addPost ();}
//          else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//         this._updateNewPostText(action.newText);
//     }
// }}


export default store;
window.store = store
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi man", likesCount: "2"},
                {id: 2, message: "It is Ivan", likesCount: "12"},
            ],
            newPostText: "",

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dim"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Ivan"},
                {id: 4, name: "Valera"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
}




export default store;
window.store = store;


/*let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi man", likesCount: "2"},
            {id: 2, message: "It is Ivan", likesCount: "12"},
        ],
        newPostText: "",

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dim"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Ivan"},
            {id: 4, name: "Valera"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
        ],
    },
}*/

/*export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: "0",
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}*/

/*export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}*/
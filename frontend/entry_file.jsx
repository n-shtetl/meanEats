import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPosts, fetchPost, createPost } from './actions/post_actions';

document.addEventListener('DOMContentLoaded', () => {

    let root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //test fx's below
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchPosts = fetchPosts;
    window.fetchPost = fetchPost;
    window.createPost = createPost;
    //test fx's above
    ReactDOM.render(<Root store={store}/>, root);
})
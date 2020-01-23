import React from 'react';
import ReactDOM from 'react-dpm';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose, } from 'redux';
import thunk from 'redux-thunk';
import fetchBoardListReducer from './store/reducers/fetchBoardListReducer';
import postNewBoardReducer from './store/reducers/postNewBoardReducer';
import postNewCardReducer from './store/reducers/postNewCardReducer';
import deleteBoardReducer from './store/reducers/deleteBoardReducer';
import deleteCardReducer from './store/reducers/deleteCardReducer';
import putCardReducer from './store/reducers/putCardReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    boardList: fetchBoardListReducer,
    newBoard: postNewBoardReducer,
    newCard: postNewCardReducer,
    deleteBoard: deleteBoardReducer,
    deleteCard: deleteCardReducer,
    changeCard: putCardReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

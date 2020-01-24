import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createStore, applyMiddleware, combineReducers, compose, } from 'redux';
import thunk from 'redux-thunk';
import fetchBoardListReducer from './store/reducers/fetchBoardListReducer';
import postNewBoardReducer from './store/reducers/postNewBoardReducer';
import postNewCardReducer from './store/reducers/postNewCardReducer';
import deleteBoardReducer from './store/reducers/deleteBoardReducer';
import deleteCardReducer from './store/reducers/deleteCardReducer';
import putCardReducer from './store/reducers/putCardReducer';
import putColorReducer from './store/reducers/putColorReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    boardList: fetchBoardListReducer,
    newBoard: postNewBoardReducer,
    newCard: postNewCardReducer,
    deleteBoard: deleteBoardReducer,
    deleteCard: deleteCardReducer,
    changeCard: putCardReducer,
    changeColor: putColorReducer
});


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
    let persistor = persistStore(store)
    return { store, persistor }
}
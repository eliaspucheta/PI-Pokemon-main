import { createStore, applyMiddleware, compose } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer/index'

const composeEnhacer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(ThunkMiddleware))
);

export default store
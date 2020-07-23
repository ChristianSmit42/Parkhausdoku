import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import { persistStore } from 'redux-persist'
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)


export  function configureStore()  {
    return { store, persistor }
}
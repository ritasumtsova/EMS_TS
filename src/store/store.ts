import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)));

sagaMiddleware.run(rootSaga);

export default store;

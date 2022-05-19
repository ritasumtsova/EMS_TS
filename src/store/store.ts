import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

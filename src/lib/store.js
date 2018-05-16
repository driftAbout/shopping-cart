import thunk from './redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import storeReporter from '../middleware/store-reporter';
import {composeWithDevTools} from 'redux-devtools-extension';
import saveToLocalStorage from './local-storage';

let store = (process.env.NODE_ENV !== 'production')
  ? createStore(reducers, composeWithDevTools(applyMiddleware(thunk, storeReporter)))
  : createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
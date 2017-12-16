import {createStore} from 'redux';
import reducers from '../reducers/reducers';
import initialState from './initialState';

const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
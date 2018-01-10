import {createStore} from 'redux';
import reducers from '../reducers/reducers';
import initialState from './initialState';

const getStore = () => {
    if (process.env.NODE_ENV === 'development') {
        return createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(reducers, initialState);
};

const store = getStore();

export default store;
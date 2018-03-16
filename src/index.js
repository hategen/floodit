import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store/store';


(()=>{
    if(window.parent !== window){
        console.log(1111);
        alert(window.parent.document.cookie);
    }
})();

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

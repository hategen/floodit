import {connect} from 'react-redux';

import {ACTION} from "../actions/actions";

import App from '../components/App';

const ConnectedApp = connect(state => state, dispatch => {
        return {action: dispatch({type: ACTION, text: 'DUPA'})}
    }
)(App);

export default ConnectedApp;
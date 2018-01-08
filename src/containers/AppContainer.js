import {connect} from 'react-redux';

import App from '../components/App/App';

const mapStateToProps = (state) => ({
    backgroundColor: state.backgroundColor,
    won: state.won
});

const ConnectedApp = connect(mapStateToProps,)(App);

export default ConnectedApp;
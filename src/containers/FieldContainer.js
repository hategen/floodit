import {connect} from 'react-redux';

import GameField from '../components/GameField/GameField';
import {changeColor} from "../actions/actions";

const mapStateToProps = (state) => state;

const mapDispatchToprops = dispatch => ({
    changeColor: (color) => {
        dispatch(changeColor(color))
    }
});
const ConnectedField = connect(mapStateToProps, mapDispatchToprops)(GameField);

export default ConnectedField;
import {connect} from 'react-redux';

import ColorControls from '../components/ColorControls/ColorControls';
import {changeColor} from "../actions/actions";

const mapStateToProps = () => (state) => {
    const {remainingColors} = state;
    return {remainingColors};
};

const mapDispatchToprops = dispatch => ({
    changeColor: (color) => {
        dispatch(changeColor(color))
    }
});
const ConnectedColorControls = connect(mapStateToProps, mapDispatchToprops)(ColorControls);

export default ConnectedColorControls;
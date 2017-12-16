import {connect} from 'react-redux';

import GameField from '../components/GameField/GameField';

const mapStateToProps = (state) => state;
const mapDispatchToprops = dispatch => dispatch => ({});

const ConnectedField = connect(mapStateToProps, mapDispatchToprops)(GameField);

export default ConnectedField;
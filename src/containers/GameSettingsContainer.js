import {connect} from 'react-redux';

import GameSettings from '../components/GameSettings/GameSettings';

const mapStateToProps = (state) => state;
const mapDispatchToprops = dispatch => dispatch => ({});

const GameSettingsContainer = connect(mapStateToProps, mapDispatchToprops)(GameSettings);

export default GameSettingsContainer;
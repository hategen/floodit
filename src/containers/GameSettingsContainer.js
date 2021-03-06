import {connect} from 'react-redux';
import {newGame, fieldSizeChange, colorNumberChange, autoTurn} from '../actions/actions';
import GameSettings from '../components/GameSettings/GameSettings';

const mapStateToProps = (state) => state;
const mapDispatchToprops = dispatch => ({
    newGame: (fieldSize) => {
        dispatch(newGame(fieldSize))
    },
    fieldSizeChange: (fieldSize) => {
        dispatch(fieldSizeChange(fieldSize))
    },
    colorNumberChange: (colorNumber) => {
        dispatch(colorNumberChange(colorNumber))
    },
    autoTurn: () => {
        dispatch(autoTurn())
    }
});

const GameSettingsContainer = connect(mapStateToProps, mapDispatchToprops)(GameSettings);

export default GameSettingsContainer;
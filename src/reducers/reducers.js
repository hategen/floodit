import {
    ACTION_NEW_GAME,
    ACTION_FIELDSIZE_CHANGE,
    ACTION_COLOR_NUMBER_CHANGE,
    ACTION_CHANGE_COLOR,
    ACTION_AUTOTURN
} from "../actions/actions";

import {getRandomColors, getRandomField, floodField, getNextTurnColor, getRemainingColors} from '../utils/colors';

export default function reducers(state = {}, action) {
    switch (action.type) {
        case ACTION_NEW_GAME:
            const colors = getRandomColors(state.colorNumber);
            const field = getRandomField(colors, state.fieldSize);
            const remainingColors = getRemainingColors(field);
            const currentColor = field[0][0];
            return {
                ...state,
                colors: colors,
                field: field,
                currentColor: currentColor,
                frontier: [{x: 0, y: 0}],
                visited: {},
                backgroundColor: currentColor,
                won: false,
                remainingColors,
                started: true
            };

        case ACTION_FIELDSIZE_CHANGE:
            return {
                ...state,
                fieldSize: action.fieldSize,
            };
        case ACTION_COLOR_NUMBER_CHANGE:
            return {
                ...state,
                colorNumber: action.colorNumber,
            };
        case ACTION_CHANGE_COLOR:
            return {
                ...state,
                backgroundColor: state.currentColor,
                currentColor: action.color,
                ...floodField(state.field, action.color, state.frontier, state.visited)
            };

        case ACTION_AUTOTURN:
            const nextColor = getNextTurnColor(state.frontier, state.field);
            return {
                ...state,
                ...floodField(state.field, nextColor, state.frontier, state.visited),
                backgroundColor: state.currentColor,
                currentColor: nextColor,
            };

        default:
            return state
    }
}
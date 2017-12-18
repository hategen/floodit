import {
    ACTION_NEW_GAME,
    ACTION_FIELDSIZE_CHANGE,
    ACTION_COLOR_NUMBER_CHANGE,
    ACTION_CHANGE_COLOR
} from "../actions/actions";

import {getRandomColors, getRandomColorsMatrix, floodField} from '../utils/colors';

export default function reducers(state = {}, action) {
    switch (action.type) {
        case ACTION_NEW_GAME:
            const colors = getRandomColors(state.colorNumber);
            const field = getRandomColorsMatrix(colors, state.fieldSize);
            const currentColor = field[0][0];
            return {
                ...state,
                colors: colors,
                field: field,
                currentColor: currentColor,
                frontier: [{x: 0, y: 0}]
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
            const {frontier, field: newField} = floodField(state.field, action.color, state.frontier);
            return {
                ...state,
                field: newField,
                frontier
            };

        default:
            return state
    }
}
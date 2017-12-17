import {
    ACTION_NEW_GAME,
    ACTION_FIELDSIZE_CHANGE,
    ACTION_COLOR_NUMBER_CHANGE
} from "../actions/actions";

import {getRandomColors, getRandomColorsMatrix} from '../utils/colors';

export default function reducers(state = {}, action) {
    switch (action.type) {
        case ACTION_NEW_GAME:
            const colors = getRandomColors(state.colorNumber);

            return {
                ...state,
                colors: colors,
                field: getRandomColorsMatrix(colors, state.fieldSize)
            }

        case ACTION_FIELDSIZE_CHANGE:
            return {
                ...state,
                fieldSize: action.fieldSize,
            }
        case ACTION_COLOR_NUMBER_CHANGE:
            return {
                ...state,
                colorNumber: action.colorNumber,
            }


        default:
            return state
    }
}
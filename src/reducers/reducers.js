import {ACTION_NEW_GAME} from "../actions/actions";

export default function reducers(state = {}, action) {
    switch (action.type) {
        case ACTION_NEW_GAME:
            return {
                ...state,
                fieldSize: action.fieldSize,
                field: Array(action.fieldSize,).fill(Array(action.fieldSize).fill(1))
            }
        default:
            return state
    }
}
import {ACTION} from "../actions/actions";

export default function reducers(state = {}, action) {
    switch (action.type) {
        case ACTION:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}
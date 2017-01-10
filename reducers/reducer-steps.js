import * as actions from '../actions/constants'

const INITIAL_STATE = {
    step: 1
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_SET_STEP:
            return { step: action.step }
        default:
            return state
    }
}

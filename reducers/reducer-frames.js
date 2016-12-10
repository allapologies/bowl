import _ from 'lodash'
import * as actions from '../actions/constants'

const INITIAL_STATE = {
    current: null,
    roll: null,
    data: {}
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_INIT:
            return _.assign({}, state, { current: 1, roll: 1 })
        case actions.GAME_START_FRAME:
            return _.assign({}, state, { current: state.current + 1, roll: 1 })
        case actions.GAME_THROW_BALL:
            return _.assign({}, state, { data: _.assign({}, state.data, { [state.current]: { } }) })
        case actions.GAME_BALL_REACHED:
            return _.assign({}, state, {
                data: _.assign({}, state.data, { [state.current]: _.assign({}, state.data[state.current], { [state.roll]: action.points  })}),
                roll: action.nextRoll
            })
        default:
            return state
    }
}

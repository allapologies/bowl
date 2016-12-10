import * as actions from '../actions/constants'
import _ from 'lodash'

const INITIAL_STATE = {
    players: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_ADD_PLAYER:
            return _.assign({}, state, { players: state.players.push(action.payload) })
        default:
            return state
    }
}

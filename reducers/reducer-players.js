import _ from 'lodash'
import * as actions from '../actions/constants'

const INITIAL_STATE = {
    players: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_ADD_PLAYER:
            return _.assign({}, state, { players: _.concat(state.players, action.payload) })
        default:
            return state
    }
}

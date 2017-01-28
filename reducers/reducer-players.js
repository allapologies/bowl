import _ from 'lodash'
import * as actions from '../actions/constants'

const INITIAL_STATE = {
    players: [],
    currentPlayer: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_START_ROLL:
            return _.assignIn({}, state, { currentPlayer: action.nextPlayer })
        case actions.GAME_ADD_PLAYER:
            return _.assign({}, state, { players: _.concat(state.players, { name: action.name, id: action.id }) })
        case actions.GAME_REMOVE_PLAYER:
            return _.assign({}, state, { players: _.filter(state.players, (player) => player.id !== action.id) })
        case actions.GAME_NEXT_PLAYER:
            return _.assign({}, state, { currentPlayer: action.player })
        case actions.START_NEW_GAME:
            return _.assign({}, state, { currentPlayer: state.players[0].id })
        // case actions.GAME_THROW_BALL_SUCCESS:
        //     return _.assign({}, state, { currentPlayer: action.nextPlayer })
        default:
            return state
    }
}

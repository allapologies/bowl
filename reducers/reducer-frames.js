import _ from 'lodash'
import * as actions from '../actions/constants'

const INITIAL_STATE = {
    currentPlayer: null,
    currentFrame: 1,
    currentRoll: 1,
    rolls: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_INIT:
        case actions.GAME_START_FRAME:
            return _.assign({}, state, {
                currentPlayer: action.playerId,
                currentFrame: action.frameId,
                currentRoll: 1
            })
        // case actions.GAME_THROW_BALL:
        //     return _.assign({}, state, {
        //         currentPlayer: action.playerId,
        //         currentFrame: action.frameId,
        //         currentRoll: 1,
        //         frameData: _.concat(state.frameData,)
        //     })
        case actions.GAME_BALL_REACHED:
            return _.assign({}, state, {
                rolls: _.concat(state.rolls, {
                    frameId: action.frameId,
                    rollId: action.rollId,
                    playerId: action.playerId,
                    score: action.score
                })
            })
        default:
            return state
    }
}

import _ from 'lodash'
import * as actions from '../actions/constants'

const INITIAL_STATE = {
    currentFrame: 1,
    currentRoll: 1,
    rolls: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_INIT:
        case actions.GAME_START_FRAME:
            return _.assign({}, state, {
                currentFrame: action.frameId,
                currentRoll: 1
            })
        case actions.GAME_THROW_BALL_SUCCESS:
            return _.assign({}, state, {
                rolls: _.concat(state.rolls, {
                    frameId: action.frameId,
                    rollId: action.rollId,
                    playerId: action.playerId,
                    score: action.score
                }),
                currentRoll: action.nextRoll,
                currentFrame: action.nextFrame
            })
        default:
            return state
    }
}

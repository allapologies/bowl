import { Map, List } from 'immutable'
import * as actions from '../actions/constants'

const INITIAL_STATE = Map({
    currentFrame: null,
    currentRoll: null,
    rolls: List([])
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_START_ROLL:
            return state
              .setIn(['currentFrame'], action.nextFrame)
              .setIn(['currentRoll'], action.nextRoll)
        case actions.GAME_INIT:
            return state
              .setIn(['currentFrame'], 1)
              .setIn(['currentRoll'], 1)
        case actions.GAME_START_FRAME:
            return state
              .setIn(['currentFrame'], action.frameId)
              .setIn(['currentRoll'], 1)
        case actions.GAME_THROW_BALL_SUCCESS:
            return state
              .updateIn(['rolls'],
                (rolls) => rolls.push({
                    playerId: action.playerId,
                    frameId: action.frameId,
                    rollId: action.rollId,
                    score: action.score
                }))
        default:
            return state
    }
}

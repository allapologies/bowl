import { Map } from 'immutable'
import * as actions from '../actions/constants'

const INITIAL_STATE = Map({
    currentFrame: null,
    currentRoll: null,
    data: Map()
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
              .updateIn(['data', action.playerId], (arr) => {
                  const { frameId, rollId, score } = action
                  return arr.push(Map({
                      frameId,
                      rollId,
                      score
                  }))
              })
        case actions.START_NEW_GAME:
            return state
              .setIn(['currentFrame'], 1)
              .setIn(['currentRoll'], 1)
        default:
            return state
    }
}

import { Map, fromJS } from 'immutable'
import _ from 'lodash'
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
              .setIn(['data', `${action.playerId}`, `${action.frameId}`, `${action.rollId}`], action.score)
        case actions.START_NEW_GAME:
            const playersObj = {}
            _.forEach(action.players, (player) => playersObj[`${player.id}`] = {})
            return state
              .setIn(['data'], fromJS(playersObj))
              .setIn(['currentFrame'], 1)
              .setIn(['currentRoll'], 1)
        default:
            return state
    }
}

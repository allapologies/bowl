import { getRandomInt, getNext } from '../utility/helpers'
import * as actions from '../actions/constants'

export default store => next => action => {
    if (!action.withRandomPoints) {
        return next(action)
    }

    const state = store.getState()
    const { frames, players } = state
    const { currentFrame, currentRoll } = frames
    const { currentPlayer } = players

    const max = 10
    const score = getRandomInt(0, max)

    const nextState = getNext(state, score)

    return next({
        type: actions.GAME_THROW_BALL_SUCCESS,
        score,
        frameId: currentFrame,
        rollId: currentRoll,
        playerId: currentPlayer,
        ...nextState
    })
}

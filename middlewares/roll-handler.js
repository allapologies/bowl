import { getRandomInt, getNext, getMax } from '../utility/helpers'
import * as actions from '../actions/constants'

export default store => next => action => {
    if (!action.withRandomPoints) {
        return next(action)
    }
    next(action)

    const state = store.getState()
    const { frames, players } = state
    const { currentFrame, currentRoll, rolls } = frames
    const { currentPlayer } = players

    const max = getMax(rolls, currentPlayer, currentFrame)
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

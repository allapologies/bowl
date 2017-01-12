import { getRandomInt } from './helpers'
import * as actions from '../actions/constants'
import _ from 'lodash'

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

    const getNext = (state) => {
        let nextRoll
        let nextPlayer
        let nextFrame
        debugger
        if (state.frames.currentRoll === 1 && score < 10) {
            nextRoll = 2
            nextPlayer = currentPlayer
            nextFrame = currentFrame
        } else {
            const playerIndex = _.findIndex(state.players.players, (player) => player.id == currentPlayer)
            nextRoll = 1
            nextPlayer = state.players.players[playerIndex + 1].id || state.players[0].id
            nextFrame = (playerIndex === state.players.length) ? currentFrame + 1 : currentFrame
        }

        return {
            nextRoll,
            nextPlayer,
            nextFrame
        }
    }

    const nextState = getNext(state)

    return next({
        type: actions.GAME_THROW_BALL_SUCCESS,
        score,
        frameId: currentFrame,
        rollId: currentRoll,
        playerId: currentPlayer,
        ...nextState
    })
}

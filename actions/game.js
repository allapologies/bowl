import { playersSelector, currentPlayerSelector, currentFrameAndRollSelector, framesDataSelector } from '../selectors'
import { getRandomInt, getNext, getMax } from '../utility/helpers'

import * as actions from './constants'

export function initGame () {
    return {
        type: actions.GAME_INIT
    }
}

export function finishGame () {
    return {
        type: actions.GAME_FINISH
    }
}

export const startGame = () => (dispatch, getState) => {
    const state = getState()

    const players = playersSelector(state)
    const currentPlayer = players[0].id

    dispatch({
        type: actions.START_NEW_GAME, players, player: currentPlayer
    })
}

export const replayGame = () => ({ type: actions.REPLAY_GAME })

export const throwBall = () => (dispatch, getState) => {
    dispatch({ type: actions.GAME_THROW_BALL })

    const state = getState()
    const currentPlayer = currentPlayerSelector(state)
    const { currentFrame, currentRoll } = currentFrameAndRollSelector(state)
    const data = framesDataSelector(state)

    const max = getMax(data, currentFrame, currentRoll)
    const score = getRandomInt(0, max)

    dispatch({
        type: actions.GAME_THROW_BALL_SUCCESS,
        score,
        frameId: currentFrame,
        rollId: currentRoll,
        playerId: currentPlayer,
    })

    const nextState = getNext(currentFrame, currentRoll, score)

    dispatch({
        type: actions.GAME_START_ROLL,
        ...nextState
    })

}

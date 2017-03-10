import { playersSelector, currentPlayerSelector, currentFrameAndRollSelector, framesDataSelector } from '../selectors'
import { getRandomInt, getNext, getMax } from '../utility/helpers'

import * as constants from './constants'

export function initGame () {
    return {
        type: constants.GAME_INIT
    }
}

export function finishGame () {
    return {
        type: constants.GAME_FINISH
    }
}

export const startGame = () => (dispatch, getState) => {
    const state = getState()

    const players = playersSelector(state)
    const currentPlayer = players[0].id

    dispatch({
        type: constants.START_NEW_GAME, players, player: currentPlayer
    })
}

export const replayGame = () => ({ type: constants.REPLAY_GAME })

export const throwBall = () => (dispatch, getState) => {
    dispatch({ type: constants.GAME_THROW_BALL })

    const state = getState()
    const currentPlayer = currentPlayerSelector(state)
    const { currentFrame, currentRoll } = currentFrameAndRollSelector(state)
    const data = framesDataSelector(state)

    const max = getMax(data, currentFrame, currentRoll)
    const score = getRandomInt(0, max)

    dispatch({
        type: constants.GAME_THROW_BALL_SUCCESS,
        score,
        frameId: currentFrame,
        rollId: currentRoll,
        playerId: currentPlayer,
    })

    if (currentFrame === constants.FRAMES_COUNT && currentRoll === constants.SECOND_ROLL) {
        dispatch(finishGame())
    }
    const nextState = getNext(currentFrame, currentRoll, score, currentPlayer)

    dispatch({
        type: constants.GAME_START_ROLL,
        ...nextState
    })

}

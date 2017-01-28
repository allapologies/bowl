import _ from 'lodash'
import * as actions from './constants'
import { getRandomInt, getNext, getMax } from '../utility/helpers'

export const addPlayer = (name) => (dispatch) => {
    dispatch({
        type: actions.GAME_ADD_PLAYER,
        name,
        id: _.uniqueId()
    })
}

export const removePlayer = (id) => {
    return {
        type: actions.GAME_REMOVE_PLAYER,
        id
    }
}

export function initGame () {
    return {
        type: actions.GAME_INIT
    }
}

export const startGame = () => ({ type: actions.START_NEW_GAME })

export const replayGame = () => ({ type: actions.REPLAY_GAME })

export const throwBall = () => (dispatch, getState) => {
    dispatch({ type: actions.GAME_THROW_BALL })
    const state = getState()
    const { frames, players } = state
    const { currentFrame, currentRoll, rolls } = frames
    const { currentPlayer } = players

    const max = getMax(rolls, currentPlayer, currentFrame)
    const score = getRandomInt(0, max)

    // const nextState = getNext(state, score)

    dispatch({
        type: actions.GAME_THROW_BALL_SUCCESS,
        score,
        frameId: currentFrame,
        rollId: currentRoll,
        playerId: currentPlayer,
    })

    const nextState = getNext(state, score)
    dispatch({
        type: actions.GAME_START_ROLL,
        ...nextState
    })

}



export const resumeGame = (players, step = 2) => {
    return (dispatch) => {
        _.forEach(players, (player) => {
            dispatch(addPlayer(player, step))
        })

        dispatch({
            type: actions.GAME_NEXT_PLAYER,
            player: '1'
        })

        dispatch({
            type: actions.GAME_SET_STEP,
            step
        })
    }
}

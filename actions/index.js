import _ from 'lodash'
import * as actions from './constants'

export function addPlayer (name) {
    return function (dispatch) {
        dispatch({
            type: actions.GAME_ADD_PLAYER,
            name,
            id: _.uniqueId()
        })
    }
}

export function removePlayer (id) {
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

export const throwBall = () => ({
    type: actions.GAME_THROW_BALL,
    withRandomPoints: true
})

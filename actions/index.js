import * as actions from './constants'

export function addPlayer (name) {
    return {
        type: actions.GAME_ADD_PLAYER,
        name,
        withCustomId: true
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

export function throwBall (player) {
    return {
        type: actions.GAME_THROW_BALL,
        player,
        withRandomPoints: true
    }
}
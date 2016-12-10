import * as actions from './constants'

export function initGame () {
    return {
        type: actions.GAME_INIT
    }
}

export function throwABall () {
    return {
        type: actions.GAME_THROW_BALL
    }
}
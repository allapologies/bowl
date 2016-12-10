import * as actions from '../actions/constants'

export default store => next => action => {
    const { type, ...rest } = action
    if (type !== actions.GAME_BALL_REACHED) {
        return next(action)
    }

    const { frames } = store.getState()
    const { roll } = frames

    if (roll === 2) {
        return next({ ...rest, type: actions.GAME_BALL_REACHED, nextRoll: 1, newFrame: true })
    } else {
        return next({ ...rest, type: actions.GAME_BALL_REACHED, nextRoll: 2 })
    }

}

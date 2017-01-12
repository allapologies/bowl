import * as actions from '../actions/constants'

export default store => next => action => {
    const { type } = action
    if (type !== actions.GAME_THROW_BALL_SUCCESS) {
        return next(action)
    }

    const { frames } = store.getState()
    const { currentRoll } = frames

    if (currentRoll == 1) {
        next({ ...action })

    }
}

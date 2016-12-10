import * as actions from '../actions/constants'

export default store => next => action => {
    const { frame } = store.getState()

    const { newFrame, ...rest } = action
    if (!newFrame) {
        return next(action)
    }

    return next({ ...rest, type: actions.GAME_START_FRAME })
}

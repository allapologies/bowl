import * as actions from '../actions/constants'

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default store => next => action => {
    const { type, ...rest } = action
    if (type !== actions.GAME_THROW_BALL) {
        return next(action)
    }

    next({ ...rest, type: actions.GAME_BALL_ROLLING })

    // setTimeout(() => {
    const { frames } = store.getState()
    const { current, roll, data } = frames
    const max = (roll === 1) ? 10 : 10 - data[current][1]
    const points = getRandomInt(0, max)
    return next({ ...rest, type: actions.GAME_BALL_REACHED, points })
    // }, 1000)
}

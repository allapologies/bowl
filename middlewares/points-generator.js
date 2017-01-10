import _ from 'lodash'
import * as actions from '../actions/constants'
import { getRandomInt } from './helpers'

export default store => next => action => {
    if (!action.withRandomPoints) {
        return next(action)
    }

    const { withRandomPoints, ...rest } = action

    next({ ...rest, type: actions.GAME_BALL_ROLLING })

    const { frames } = store.getState()
    const { current, roll, data } = frames
    const max = (roll === 1) ? 10 : 10 - data[current][1]
    const points = getRandomInt(0, max)
    return next({ ...rest, type: actions.GAME_BALL_REACHED, points })
}

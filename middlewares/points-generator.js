import * as actions from '../actions/constants'
import { getRandomInt } from './helpers'

export default store => next => action => {
    if (!action.withRandomPoints) {
        return next(action)
    }

    const { withRandomPoints, max = 10, ...rest } = action

    setTimeout(() => {
        const score = getRandomInt(0, max)
        return next({
            ...rest,
            score
        })
    }, 2000)
}

import _ from 'lodash'
import * as actions from '../actions/constants'

export default store => next => action => {
    if (!action.withCustomId) {
        return next(action)
    }

    const id = _.uniqueId()
    const { withCustomId, ...rest } = action
    return next({ ...rest, id, type: actions.GAME_ADD_PLAYER })
}

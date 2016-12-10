import * as actions from '../actions/constants'
import _ from 'lodash'

const INITIAL_STATE = {
    items: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_DICTIONARIES:
            return _.assign({}, state, { items: action.payload.data })
        default:
            return state
    }
}

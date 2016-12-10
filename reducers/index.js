import { combineReducers } from 'redux'
import players from './reducer-players'

const rootReducer = combineReducers({
    players,
})

export default rootReducer

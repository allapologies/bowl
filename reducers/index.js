import { combineReducers } from 'redux'
import players from './reducer-players'
import frames from './reducer-frames'

const rootReducer = combineReducers({
    players,
    frames
})

export default rootReducer

/* eslint-env jasmine */
import { Map } from 'immutable'
import frames from '../reducers/reducer-frames'
import { GAME_INIT, GAME_START_FRAME, START_NEW_GAME } from '../actions/constants'

describe('Reducer - frames', () => {
    it('should return the initial state', () => {
        const expected = {
            currentFrame: null,
            currentRoll: null,
            data: {}
        }

        const actual = frames(undefined, {})
        expect(actual.toJS()).toEqual(expected)
    })
    it('should handle GAME_INIT', () => {
        const expected = {
            currentFrame: 1,
            currentRoll: 1,
            data: {}
        }

        const action = {
            type: GAME_INIT
        }

        const actual = frames(undefined, action)
        expect(actual.toJS()).toEqual(expected)
    })
    it('should handle GAME_START_FRAME', () => {
        const expected = {
            currentFrame: 6,
            currentRoll: 1,
            data: {}
        }

        const state = Map({
            currentFrame: 5,
            currentRoll: 2,
            data: {}
        })

        const action = {
            type: GAME_START_FRAME,
            frameId: 6
        }

        const actual = frames(state, action)
        expect(actual.toJS()).toEqual(expected)
    })

    it('creates properties in data map when starting the game', () => {
        const expected = {
            currentFrame: null,
            currentRoll: null,
            data: {
                1: {},
                2: {},
                10: {},
                55: {}
            }
        }

        const action = {
            type: START_NEW_GAME,
            players: [
                { name: 'Aleksandr', id: 1 },
                { name: 'Irina', id: 2 },
                { name: 'Michael', id: 10 },
                { name: 'Kurt', id: 55 },
            ]
        }

        const actual = frames(undefined, action)

        expect(actual.toJS()).toEqual(expected)
    })
})

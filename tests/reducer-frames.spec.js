/* eslint-env jasmine */
import frames from '../reducers/reducer-frames'

import {
    GAME_INIT, GAME_START_FRAME, GAME_BALL_REACHED
} from '../actions/constants'

describe('Reducer - frames', () => {
    it('should return the initial state', () => {
        const expected = {
            current: null, roll: null, data: {}
        }

        const actual = frames(undefined, {})
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_INIT', () => {
        const expected = {
            current: 1, roll: 1, data: {}
        }

        const action = {
            type: GAME_INIT
        }

        const actual = frames(undefined, action)
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_START_FRAME', () => {
        const expected = {
            current: 6, roll: 1, data: {}
        }

        const state = {
            current: 5, roll: 2, data: {}
        }

        const action = {
            type: GAME_START_FRAME
        }

        const actual = frames(state, action)
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_THROW_BALL', () => {
        const expected = {
            current: 6, roll: 1, data: {}
        }

        const state = {
            current: 5, roll: 2, data: {}
        }

        const action = {
            type: GAME_START_FRAME
        }

        const actual = frames(state, action)
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_BALL_REACHED', () => {
        const expected = {
            current: 1, roll: 1, data: {
                1: {
                    1: 5, 2: 4
                }
            }
        }

        const state = {
            current: 1, roll: 2, data: {
                1: {
                    1: 5
                }
            }
        }

        const action = {
            type: GAME_BALL_REACHED, points: 4, nextRoll: 1
        }

        const actual = frames(state, action)
        expect(actual).toEqual(expected)
    })
})

/* eslint-env jasmine */
import frames from '../reducers/reducer-frames'
import { GAME_INIT, GAME_START_FRAME } from '../actions/constants'

describe('Reducer - frames', () => {
    it('should return the initial state', () => {
        const expected = {
            currentFrame: null,
            currentRoll: null,
            rolls: []
        }

        const actual = frames(undefined, {})
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_INIT', () => {
        const expected = {
            currentFrame: 1,
            currentRoll: 1,
            rolls: []
        }

        const action = {
            type: GAME_INIT
        }

        const actual = frames(undefined, action)
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_START_FRAME', () => {
        const expected = {
            currentFrame: 6,
            currentRoll: 1,
            data: []
        }

        const state = {
            currentFrame: 5,
            currentRoll: 2,
            data: []
        }

        const action = {
            type: GAME_START_FRAME,
            frameId: 6
        }

        const actual = frames(state, action)
        expect(actual).toEqual(expected)
    })
})

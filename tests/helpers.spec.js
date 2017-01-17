/* eslint-env jasmine */
import { getNextFrameId } from '../utility/helpers'

describe('Utility functions', () => {
    it('getNextFrameId', () => {
        const expected = 2
        const state = {
            frames: {
                currentFrame: 1
            }
        }
        const actual = getNextFrameId(state)

        expect(actual).toEqual(expected)
    })
})

/* eslint-env jasmine */
import { Map } from 'immutable'
import { currentScoreSelector } from '../selectors/selectors'

describe('selectors: ', () => {
    describe('currentScore', () => {
        it('exports', () => {
            expect(currentScoreSelector).toBeDefined()
        })

        it('returns score data for first player', () => {

            const expected = {
                '1': [[2]]
            }

            const state = {
                frames: Map({
                    data: Map({
                        '1': Map({
                            '1': Map({
                                '1': 2
                            })
                        })
                    })
                })
            }

            const actual = currentScoreSelector(state)
            expect(actual).toEqual(expected)
        })

    })
})

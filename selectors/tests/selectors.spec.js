/* eslint-env jasmine */
import { Map } from 'immutable'
import { currentScoreSelector } from '../selectors'

describe('selectors: ', () => {
    describe('currentScore returns score data for ', () => {

        it('first player, first frame and first roll', () => {

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

        it('first player, first frame and 2 rolls', () => {

            const expected = {
                '1': [[2, 3]]
            }

            const state = {
                frames: Map({
                    data: Map({
                        '1': Map({
                            '1': Map({
                                '1': 2,
                                '2': 3
                            })
                        })
                    })
                })
            }

            const actual = currentScoreSelector(state)
            expect(actual).toEqual(expected)
        })

        it('first player, 2 frames and 1 roll', () => {

            const expected = {
                '1': [[2, 3], [1]]
            }

            const state = {
                frames: Map({
                    data: Map({
                        '1': Map({
                            '1': Map({
                                '1': 2,
                                '2': 3
                            }),
                            '2': Map({
                                '1': 1
                            })
                        })
                    })
                })
            }

            const actual = currentScoreSelector(state)
            expect(actual).toEqual(expected)
        })

        it('first 2 players, 2 frames', () => {

            const expected = {
                '1': [[2, 3], [1, 8]],
                '2': [[5, 5], [0]]
            }

            const state = {
                frames: Map({
                    data: Map({
                        '1': Map({
                            '1': Map({
                                '1': 2,
                                '2': 3
                            }),
                            '2': Map({
                                '1': 1,
                                '2': 8
                            })
                        }),
                        '2': Map({
                            '1': Map({
                                '1': 5,
                                '2': 5
                            }),
                            '2': Map({
                                '1': 0
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

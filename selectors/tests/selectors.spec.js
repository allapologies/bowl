import { Map as iMap, List as iList } from 'immutable'
import { currentScoreSelector } from '../selectors'

describe('selectors: ', () => {

    describe('currentScore returns score data for ', () => {

        xit('empty set', () => {

            const expected = [
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                }
            ]

            const state = {
                frames: iMap({
                    data: iList([])
                })
            }

            const actual = currentScoreSelector(state)
            expect(actual).toEqual(expected)
        })

        it('first roll of first frame', () => {

            const expected = [
                {
                    firstRoll: 3,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                }
            ]

            const state = [{
                frameId: 1,
                rollId: 1,
                score: 3
            }]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })

        xit('first frame and 2 rolls', () => {

            const expected = [
                {
                    firstRoll: 2,
                    secondRoll: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                }
            ]

            const state = {
                frames: iMap({
                    data: iList([[2, 3]])
                })
            }

            const actual = currentScoreSelector(state)
            expect(actual).toEqual(expected)
        })

        xit('2 frames and 1 roll', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 2
                },
                {
                    firstRoll: 7,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                },
                {
                    firstRoll: null,
                    secondRoll: null
                }
            ]

            const state = {
                frames: iMap({
                    data: iList([[5, 2], [7]])
                })
            }

            const actual = currentScoreSelector(state)
            expect(actual).toEqual(expected)
        })

        xit('first 2 players, 2 frames', () => {

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

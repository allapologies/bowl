import { Map as iMap, List as iList } from 'immutable'
import { currentScoreSelector, getFramesSlice, framesDataSelector } from '../selectors'

describe('selectors: ', () => {

    describe('getFramesSlice', () => {
        it('returns frames slice', () => {
            const state = {
                frames: {
                    anyProp: 'anyString'
                }
            }

            const expected = {
                anyProp: 'anyString'
            }

            const actual = getFramesSlice(state)

            expect(actual).toEqual(expected)
        })
    })

    describe('framesDataSelector', () => {
        it('returns frames data', () => {
            const state = iMap({
                data: iList(['a'])
            })

            const expected = ['a']

            const actual = framesDataSelector.resultFunc(state)

            expect(actual).toEqual(expected)
        })

        it('works with composing selectors', () => {
            const state = {
                frames: iMap({
                    data: iList(['a'])
                })
            }
            const expected = ['a']

            const actual = framesDataSelector(state)

            expect(actual).toEqual(expected)
        })
    })

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
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3

                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 3
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
        it('second roll of first frame', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 4,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9

                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                }
            ]

            const state = [{
                    frameId: 1,
                    rollId: 1,
                    score: 5
                },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 4
                }
            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })
        it('first roll of second frame', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 4,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: 1,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10

                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 10
                }
            ]

            const state = [{
                    frameId: 1,
                    rollId: 1,
                    score: 5
                },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 4
                },
                {
                    frameId: 2,
                    rollId: 1,
                    score: 1
                }
            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })
        it('spare in first frame', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 5,
                    isStrike: false,
                    isSpare: true,
                    totalScore: 11
                },
                {
                    firstRoll: 1,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 12
                }
            ]

            const state = [{
                    frameId: 1,
                    rollId: 1,
                    score: 5
                },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 5
                },
                {
                    frameId: 2,
                    rollId: 1,
                    score: 1
                }
            ]

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

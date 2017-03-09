/* eslint-env jasmine */
import { Map, List, fromJS } from 'immutable'
import * as matchers from 'jasmine-immutable-matchers'
import frames from '../reducer-frames'
import { GAME_INIT, GAME_START_FRAME, START_NEW_GAME, GAME_THROW_BALL_SUCCESS } from '../../actions/constants'

describe('Reducer - frames', () => {
    beforeEach(() => jasmine.addMatchers(matchers))

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

    xit('creates properties in data map when starting the game', () => {
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

        expect(actual).toEqualImmutable(expected)
    })

    xit('handle THROW BALL SUCCESS for first roll', () => {

        const action = {
            type: GAME_THROW_BALL_SUCCESS,
            playerId: '1',
            frameId: 1,
            rollId: 1,
            score: 4
        }

        const expected = fromJS({
            currentFrame: null,
            currentRoll: null,
            data: {
                '1': [
                    {
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    }
                ]
            }
        })

        const actual = frames(undefined, action)

        expect(actual).toEqualImmutable(expected)
    })

    it('handle THROW BALL SUCCESS for second roll', () => {
        const state = Map({
            currentFrame: null,
            currentRoll: null,
            data: Map({
                '5': List([Map(
                    {
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    })
                ])
            })
        })

        const action = {
            type: GAME_THROW_BALL_SUCCESS,
            playerId: '5',
            frameId: 3,
            rollId: 2,
            score: 2
        }

        const expected = Map({
            currentFrame: null,
            currentRoll: null,
            data: Map({
                '5': List([
                    Map({
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    }),
                    Map({
                        frameId: 3,
                        rollId: 2,
                        score: 2
                    })
                ])
            })
        })

        const actual = frames(state, action)
        expect(actual).toEqualImmutable(expected)
    })

    xit('handle THROW BALL SUCCESS for different players', () => {
        const state = fromJS({
            currentFrame: null,
            currentRoll: null,
            data: {
                '2': [
                    {
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    },
                    {
                        frameId: 1,
                        rollId: 2,
                        score: 3
                    }
                ]
            }
        })

        const action = {
            type: GAME_THROW_BALL_SUCCESS,
            playerId: '2',
            frameId: 2,
            rollId: 1,
            score: 8
        }

        const expected = fromJS({
            currentFrame: null,
            currentRoll: null,
            data: {
                '5': [
                    {
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    },
                    {
                        frameId: 3,
                        rollId: 2,
                        score: 2
                    }
                ],
                '2': [
                    {
                        frameId: 2,
                        rollId: 1,
                        score: 8
                    }
                ]
            }
        })

        const actual = frames(state, action)
        expect(actual).toEqualImmutable(expected)
    })
})

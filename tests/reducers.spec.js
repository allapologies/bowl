/* eslint-env jasmine */
import players from '../reducers/reducer-players'
import frames from '../reducers/reducer-frames'
import { GAME_ADD_PLAYER, GAME_INIT, GAME_START_FRAME, GAME_BALL_REACHED } from '../actions/constants'

describe('Reducers', () => {
    describe('Players', () => {
        it('should return the initial state', () => {
            const expected = {
                players: []
            }
            const actual = players(undefined, {})
            expect(actual).toEqual(expected)
        })
        it('should handle GAME_ADD_PLAYER with empty initial state', () => {
            const expected = {
                players: ['Aleksandr']
            }

            const action = {
                type: GAME_ADD_PLAYER,
                payload: 'Aleksandr'
            }

            const actual = players(undefined, action)
            expect(actual).toEqual(expected)
        })
        it('should handle GAME_ADD_PLAYER with initial state', () => {
            const initialState = {
                players: ['Aleksandr']
            }

            const expected = {
                players: ['Aleksandr', 'Irina']
            }


            const action = {
                type: GAME_ADD_PLAYER,
                payload: 'Irina'
            }

            const actual = players(initialState, action)
            expect(actual).toEqual(expected)
        })
    })
    describe('Frames', () => {
        it('should return the initial state', () => {
            const expected = {
                current: null,
                roll: null,
                data: {}
            }

            const actual = frames(undefined, {})
            expect(actual).toEqual(expected)
        })
        it('should handle GAME_INIT', () => {
            const expected = {
                current: 1,
                roll: 1,
                data: {}
            }

            const action = {
                type: GAME_INIT
            }

            const actual = frames(undefined, action)
            expect(actual).toEqual(expected)
        })
        it('should handle GAME_START_FRAME', () => {
            const expected = {
                current: 6,
                roll: 1,
                data: {}
            }

            const state = {
                current: 5,
                roll: 2,
                data: {}
            }

            const action = {
                type: GAME_START_FRAME
            }

            const actual = frames(state, action)
            expect(actual).toEqual(expected)
        })
        it('should handle GAME_THROW_BALL', () => {
            const expected = {
                current: 6,
                roll: 1,
                data: {}
            }

            const state = {
                current: 5,
                roll: 2,
                data: {}
            }

            const action = {
                type: GAME_START_FRAME
            }

            const actual = frames(state, action)
            expect(actual).toEqual(expected)
        })
        it('should handle GAME_BALL_REACHED', () => {
            const expected = {
                current: 1,
                roll: 1,
                data: {
                    1: {
                        1: 5,
                        2: 4
                    }
                }
            }

            const state = {
                current: 1,
                roll: 2,
                data: {
                    1: {
                        1: 5
                    }
                }
            }

            const action = {
                type: GAME_BALL_REACHED,
                points: 4,
                nextRoll: 1
            }

            const actual = frames(state, action)
            expect(actual).toEqual(expected)
        })

    })
})

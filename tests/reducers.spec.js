/* eslint-env jasmine */
import players from '../reducers/reducer-players'
import { GAME_ADD_PLAYER } from '../actions/constants'

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
})

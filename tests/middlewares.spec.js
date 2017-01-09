/* eslint-env jasmine */
import withCustomId from '../middlewares/with-custom-id'
import { GAME_ADD_PLAYER } from '../actions/constants'

const createFakeStore = (fakeData) => ({
    getState () {
        return fakeData
    }
})

const dispatchWithStoreOf = (storeData, action) => {
    let dispatched = null
    const dispatch = withCustomId(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt)
    dispatch(action)
    return dispatched
}


describe('Middlewares', () => {
    describe('With Custom Id', () => {
        it('should dispatch GAME_ADD_PLAYER with custom ID payload', () => {
            const expected = {
                type: GAME_ADD_PLAYER,
                name: 'Aleksandr',
                id: '1'
            }

            const action = {
                type: GAME_ADD_PLAYER,
                name: 'Aleksandr',
                withCustomId: true
            }

            expect(dispatchWithStoreOf({}, action)).toEqual(expected)
        })
    })
})

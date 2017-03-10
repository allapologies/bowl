import _ from 'lodash'
import Immutable from 'immutable'
import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect'
import { FRAMES_COUNT } from '../actions/constants'

const createImmutableSelector = createSelectorCreator(defaultMemoize, Immutable.is)

export const getFramesSlice = createSelector(
    (state) => state.frames,
    (frames) => frames
)

export const framesDataSelector = createImmutableSelector(
    [getFramesSlice],
    (framesSlice) => framesSlice.get('data').toJS()
)

export const currentScoreSelector = createSelector(
    [framesDataSelector],
    (data) => {
        let score = new Array(FRAMES_COUNT)
        score = _.map(score, () => ({ firstRoll: null, secondRoll: null }))

        if (!_.isEmpty(data)) {
            _.forEach(data, (item) => {
                const frame = item.frameId - 1
                const roll = item.rollId === 1 ? 'firstRoll' : 'secondRoll'
                score[frame][roll] = item.score
            })
        }

        return score
    }
)

export const currentFrameAndRollSelector = createSelector(
    [getFramesSlice],
    (framesSlice) => {
        const currentFrame = framesSlice.get('currentFrame')
        const currentRoll = framesSlice.get('currentRoll')
        return {currentFrame, currentRoll}
    }
)

export const getPlayersSlice = createSelector(
    (state) => state.players,
    (players) => players
)

export const playersSelector = createImmutableSelector(
    [getPlayersSlice],
    (playersSlice) => playersSlice.get('players').toJS()
)

export const currentPlayerSelector = createImmutableSelector(
    [getPlayersSlice],
    (playersSlice) => playersSlice.get('currentPlayer')
)

export const getCurrentPlayerMeta = createImmutableSelector(
    [playersSelector, currentPlayerSelector],
    (players, currentPlayer) => {
        const data = _.find(
            players,
            (player) => player.id === currentPlayer
        )
        return { name: data.name, id: data.id }
    }
)

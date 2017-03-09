import _ from 'lodash'
import Immutable from 'immutable'
import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect'

const FRAMES_COUNT = 10

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
        _.fill(score, { firstRoll: null, secondRoll: null })

        _.forEach(data, (item, index) => {
            score[item.frameId].firstRoll = item.score
            score[item.frameId].secondRoll = item.score
        })

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
        return {name: data.name, id: data.id}
    }
)

import _ from 'lodash'
import Immutable from 'immutable'
import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect'

import { FRAMES_COUNT, TOTAL_PINS } from '../actions/constants'

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
        score = _.map(score, () => ({
            firstRoll: null,
            secondRoll: null,
            isStrike: false,
            isSpare: false,
            totalScore: null
        }))

        if (!_.isEmpty(data)) {
            _.forEach(data, (item) => {
                const frame = item.frameId - 1
                const roll = item.rollId === 1 ? 'firstRoll' : 'secondRoll'
                score[frame][roll] = item.score
            })
        }

        _.forEach(score, (frame, index) => {
            if (_.isNull(frame.firstRoll) && _.isNull(frame.secondRoll)) {
                score[index].totalScore = index > 0 ? score[index - 1].totalScore : null
                return
            }
            score[index].isStrike = frame.firstRoll === TOTAL_PINS
            score[index].isSpare = !score[index].isStrike && (frame.firstRoll + frame.secondRoll) === TOTAL_PINS
            score[index].totalScore = score[index].firstRoll + score[index].secondRoll

            if (index > 0) {
                score[index].totalScore += score[index - 1].totalScore
            }

            if (score[index].isSpare && score[index + 1].firstRoll !== null) {
                score[index].totalScore += score[index + 1].firstRoll
            }

            if (score[index].isStrike && score[index + 1].firstRoll !== null && score[index + 1].secondRoll !== null) {
                score[index].totalScore = score[index].totalScore + score[index + 1].firstRoll + score[index + 1].secondRoll
            }
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
        return { name: "wat", id: "wot" }
    }
)

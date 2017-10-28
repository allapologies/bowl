import _ from 'lodash'
import Immutable from 'immutable'
import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect'

import { FRAMES_COUNT, TOTAL_PINS, FIRST_ROLL, SECOND_ROLL } from '../actions/constants'

const createImmutableSelector = createSelectorCreator(defaultMemoize, Immutable.is)

export const stepSelector = (state) => state.steps.step

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
        return { currentFrame, currentRoll }
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

export const getIsFinished = createImmutableSelector(
    [getFramesSlice],
    (framesSlice) => framesSlice.get('isFinished')
)

const getScoreByFrameIdAndRollId = (frameId, rollId, data) => {
    const result = _.find(data, { frameId, rollId })
    return TOTAL_PINS - result.score
}

export const getAvailablePins = createImmutableSelector(
    [getFramesSlice, framesDataSelector],
    (framesSlice, data) => {
        const currentRoll = framesSlice.get('currentRoll')
        const currentFrame = framesSlice.get('currentFrame')

        switch (currentRoll) {
            case FIRST_ROLL:
                return TOTAL_PINS
            case SECOND_ROLL:
                return getScoreByFrameIdAndRollId(currentFrame, FIRST_ROLL, data)
            default:
                return TOTAL_PINS
        }
    }
)


const isSpare = (score1, score2) => score1 + score2 === TOTAL_PINS
const handleSpare = (score1, score2) => score1 + score2


export const getScore = createImmutableSelector(
    [framesDataSelector],
    (rolls) => _.reduce(rolls, (result, roll, index) => {
        if (isSpare(roll.score, _.get(_.nth(rolls, index + 1), 'score', 0))) {
            result += handleSpare(roll.score, _.get(_.nth(rolls, index + 2), 'score', 0))
        } else {
            result += roll.score
        }
        return result
    }, 0)
)

import _ from 'lodash'

export default store => next => action => {
    if (!action.withRandomPoints) {
        return next(action)
    }

    const { withRandomPoints, ...rest } = action

    const { frames } = store.getState()
    const { currentPlayer, currentFrame, currentRoll } = frames

    const roll = _.find(frames.rolls, (rollData) => {
        return rollData.rollId === currentRoll && rollData.playerId === currentPlayer && rollData.frameId === currentFrame
    })

    const max = _.isNull(roll.score) ? 10 : 10 - roll.score

    return next({
        ...rest,
        max
    })
}

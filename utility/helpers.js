import _ from 'lodash'

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const getMax = (scoreData = [], playerId, frameId) => {
    let max = 10

    _.forEach(scoreData, (record) => {
        if (record.playerId === playerId) {
            if (record.frameId === frameId) {
                if (record.score !== null) {
                    max -= record.score
                }
            }
        }

    })

    return max
}

export const getNextPlayerId = (currentPlayerId, players) => {
    const currentIndex = _.findIndex(players, (player) => player.id === currentPlayerId)
    if (players[currentIndex + 1]) {
        return players[currentIndex + 1].id
    } else {
        return players[0].id
    }
}

export const getNextFrameId = (state) => state.frames.currentFrame + 1

export const getNext = (state, score) => {
    const { frames, players } = state
    const { currentFrame, currentRoll } = frames
    const { currentPlayer } = players

    let nextRoll
    let nextPlayer
    let nextFrame
    if (currentRoll === 1 && score < 10) {
        nextRoll = 2
        nextPlayer = currentPlayer
        nextFrame = currentFrame
    } else {
        nextRoll = 1
        nextPlayer = getNextPlayerId(currentPlayer, players.players)
        nextFrame = getNextFrameId(state)
    }

    return {
        nextRoll,
        nextPlayer,
        nextFrame
    }
}

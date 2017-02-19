import _ from 'lodash'

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const getMax = (frameData = {}) => {
    let max = 10
    _.forIn(frameData, (val) => max -= val)
    return max
}

export const getNextPlayerId = (currentPlayerId, players) => {
    const currentIndex = _.findIndex(players, (player) => {
        return player.id == currentPlayerId
    })
    if (players[currentIndex + 1]) {
        return { id: players[currentIndex + 1].id, index: currentIndex + 1 }
    } else {
        return { id: players[0].id, index: 0 }
    }
}

export const getNextFrameId = (frame) => frame + 1

export const getNext = (currentPlayer, players, currentFrame, currentRoll, score, data) => {

    let nextRoll
    let nextPlayer
    let nextFrame
    if (currentFrame === 10 && currentRoll === 2) {
        if (getMax(data[currentPlayer][currentFrame]) === 10) {
            nextRoll = 3
            nextPlayer = currentPlayer
            nextFrame = 10
        }
    }

    if (currentRoll === 1) {
        if (score < 10) {
            nextRoll = 2
            nextPlayer = currentPlayer
            nextFrame = currentFrame
        } else {
            nextRoll = 1
            const nextPlayerData = getNextPlayerId(currentPlayer, players)
            nextPlayer = nextPlayerData.id
            nextFrame = (nextPlayerData.index === 0) ? getNextFrameId(currentFrame) : currentFrame
        }
    }

    if (currentRoll === 2) {
        nextRoll = 1
        const nextPlayerData = getNextPlayerId(currentPlayer, players)
        nextPlayer = nextPlayerData.id
        nextFrame = (nextPlayerData.index === players.length - 1) ? currentFrame : getNextFrameId(currentFrame)
    }

    return {
        nextRoll,
        nextPlayer,
        nextFrame
    }
}

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
    const currentIndex = _.findIndex(players, (player) => {
        return player.id == currentPlayerId
    })
    if (players[currentIndex + 1]) {
        return { id: players[currentIndex + 1].id, index: currentIndex + 1 }
    } else {
        return { id: players[0].id, index: 0 }
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
    if (currentFrame === 10) {
        // handle 10th frame
    }

    if (currentRoll === 1) {
        if (score < 10) {
            nextRoll = 2
            nextPlayer = currentPlayer
            nextFrame = currentFrame
        } else {
            nextRoll = 1
            const nextPlayerData = getNextPlayerId(currentPlayer, players.players)
            nextPlayer = nextPlayerData.id
            nextFrame = (nextPlayerData.index === 0) ? getNextFrameId(state) : currentFrame
        }
    }

    if (currentRoll === 2) {
        nextRoll = 1
        const nextPlayerData = getNextPlayerId(currentPlayer, players.players)
        nextPlayer = nextPlayerData.id
        nextFrame = (nextPlayerData.index === players.players.length - 1) ? currentFrame : getNextFrameId(state)
    }

    return {
        nextRoll,
        nextPlayer,
        nextFrame
    }
}

import _ from 'lodash'
import Immutable from 'immutable'
import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect'

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
      let scoreByPlayers = []

      _.forIn(data, (playerData, playerId) => {
          let score = {}
          score.playerId = playerId
          score.data = {}
          _.forIn(playerData, (frames, frameNum) => {

          })

          scoreByPlayers.push(score)
      })

      return scoreByPlayers
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
  (playersSlice) => {
      debugger
      return playersSlice.get('currentPlayer')
  }
)

export const getCurrentPlayerMeta = createImmutableSelector(
  [playersSelector, currentPlayerSelector],
  (players, currentPlayer) => {
      const data = _.find(
        players,
        (player) => player.id == currentPlayer
      )
      return { name: data.name, id: data.id }
  }
)

// export const currentPlayerSelector = createSelector(
//   [getPlayersSlice],
//   (playersSlice) => {
//       const playerData = _.find(
//         playersSlice.players,
//         (player) => player.id == playersSlice.currentPlayer
//       )
//       return { name: playerData.name, id: playerData.id }
//   }
// )

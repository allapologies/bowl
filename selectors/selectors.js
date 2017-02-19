import { createSelector } from 'reselect'

export const framesSelector = createSelector((state) => state.frames, (frames) => frames.toJS())

export const playersSelector = createSelector((state) => state.players, (players) => players.toJS())
export const currentPlayer = createSelector(playersSelector, (players) => players.currentPlayer)
export const players = createSelector(playersSelector, (players) => players.players)

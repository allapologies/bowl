import React from 'react'
import { ScoreBoardHead } from './scoreboard-head'
import { ScoreboardBody } from './scoreboard-body'

export const ScoreBoard = () => (
  <table className="table table-bordered">
      <ScoreBoardHead />
      <ScoreboardBody />
  </table>
)

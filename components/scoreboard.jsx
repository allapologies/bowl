import React, { PropTypes } from 'react'
import _ from 'lodash'
import { ScoreBoardRow } from './scoreboard-row'

export const ScoreBoard = (props) => {
    const renderHead = (frames) => {
        let heading = new Array(frames)
        const d = _.map(heading, (id, key) => {
            const frameNum = key + 1
            return (
              <th key={frameNum}>
                  {frameNum}
              </th>
            )
        })
        return (
          <tr>
              <td>Frame:</td>
              {d}
          </tr>
        )
    }

    const renderTable = () => {
        _.map(props.players, (player, key) => {
            return (
              <tr key={key}>
                  <td>{player.name}</td>
                  {_.map(props.frames.rolls, (rolls) => {
                      const playerData = _.filter(rolls, (roll) => roll.playerId !== player.id)
                      return (
                        <ScoreBoardRow player={player.name} rolls={playerData} />
                      )
                  })}
              </tr>
            )
        })
    }

    return (
      <table className="table table-bordered">
          <tbody>
          {renderHead(props.frames.currentFrame)}
          {renderTable()}
          </tbody>
      </table>
    )
}

ScoreBoard.propTypes = {
    players: PropTypes.arrayOf(PropTypes.string),
    frames: PropTypes.object
}

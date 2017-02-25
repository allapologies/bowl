import React, { PropTypes } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { ScoreBoardRow } from './scoreboard-row'
import { currentFrameAndRollSelector } from '../selectors'

export const ScoreBoardRaw = (props) => {
    const renderHead = () => {
        let heading = new Array(10)
        const cell = _.map(heading, (id, key) => {
            const frameNum = key + 1
            return (
              <th key={frameNum}>
                  {frameNum}
              </th>
            )
        })
        return (
          <tr>
              <td>Frame</td>
              {cell}
              <td>Total</td>
          </tr>
        )
    }

    const renderTable = () => (
      _.map(props.players, (player, key) => (
        <ScoreBoardRow key={key} player={player.name} rolls={frames} />
      ))
    )

    return (
      <table className="table table-bordered">
          <tbody>
          {renderHead()}
          {/*{renderTable()}*/}
          </tbody>
      </table>
    )
}

ScoreBoardRaw.propTypes = {
    players: PropTypes.arrayOf(PropTypes.string),
    frames : PropTypes.object
}


export const ScoreBoard = connect((state) => ({
    currentFrameAndRoll: currentFrameAndRollSelector(state),
}))(ScoreBoardRow)

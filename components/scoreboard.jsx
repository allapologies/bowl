import React, { PropTypes } from 'react'
import _ from 'lodash'

export const ScoreBoard = (props) => {
    const renderHead = () => {
        let heading = new Array(10)
        return (
          <tr>
              <td>Frame:</td>
              {_.map(heading, (id, key) => (<th key={key}>{key}</th>))}
          </tr>
        )

    }

    const renderPlayer = () => {
        return (
          <tr>
              <td>{props.players[0]}</td>
              {_.map(props.frames, (frame, key) => (<td key={key}>{frame[1]} || {frame[2]}</td>))}
          </tr>
        )
    }

    return (
      <table className="table table-bordered">
          <tbody>
          {renderHead()}
          {renderPlayer()}
          </tbody>
      </table>
    )
}

ScoreBoard.propTypes = {
    players: PropTypes.arrayOf(PropTypes.string),
    frames : PropTypes.object
}

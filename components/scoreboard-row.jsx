import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Cell } from './scoreboard-row-cell'

export const ScoreBoardRow = (props) => {

    const { player } = props

    return (
      <tr>
          <td>
              {player.name}
          </td>
          {_.map(new Array(10), (roll, index) => <td key={index}>meow</td>)}
          <td>
              'Total'
          </td>
      </tr>
    )
}

ScoreBoardRow.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string
    })
}

import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Cell } from './scoreboard-row-cell'

export const ScoreBoardRow = (props) => {

    const { player, rolls } = props

    return (
      <tr>
          <td>
              {player}
          </td>
          {_.map(new Array(10), (roll, index) => <Cell key={`cell${index}`} roll={roll} />)}
          <td>
              'Total'
          </td>
      </tr>
    )
}

ScoreBoardRow.propTypes = {
    player: PropTypes.string,
    rolls: PropTypes.array
}

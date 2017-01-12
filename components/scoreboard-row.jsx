import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Cell } from './scoreboard-row-cell'

export const ScoreBoardRow = (props) => {

    return (
      <tr>
        <td>{props.player}</td>
        {_.map(props.rolls, (roll) => <Cell rollsData={roll} />)}
      </tr>
    )
}

ScoreBoardRow.propTypes = {
    player: PropTypes.object,
    rolls: PropTypes.array
}

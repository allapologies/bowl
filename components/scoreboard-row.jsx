import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Cell } from './scoreboard-row-cell'

export const ScoreBoardRow = (props) => {

    return (
      <div>
          {_.map(props.rolls, (roll) => <Cell rollsData={roll}/>)}
      </div>
    )
}

ScoreBoardRow.propTypes = {
    player: PropTypes.object,
    rolls : PropTypes.array
}

import React, { PropTypes } from 'react'
import _ from 'lodash'

import { FRAMES_COUNT } from '../actions/constants'

export const ScoreBoardRow = (props) => {

    const { player, score, total } = props

    return (
        <tr>
          <td>
              {player.name}
          </td>
          {_.map(new Array(FRAMES_COUNT), (roll, index) => {
              return (
                <td key={index}>
                    <span>
                        {score[index].firstRoll}
                    </span>
                    |
                    <span>
                        {score[index].secondRoll}
                    </span>

                    <span>{score[index].isStrike ? 'X' : null }</span>
                    <span>{score[index].isSpare ? '/' : null }</span>
                    <span><span>ttl: </span>{score[index].totalScore }</span>
                </td>
              )
          })}
          <td>
              {total}
          </td>
        </tr>
    )
}

ScoreBoardRow.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string
    }),
    score: PropTypes.array,
    total: PropTypes.number
}

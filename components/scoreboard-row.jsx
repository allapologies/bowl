import React, { PropTypes } from 'react'
import _ from 'lodash'

import { Cell } from './scoreboard-row-cell'

import { FRAMES_COUNT } from '../actions/constants'

import styles from './scoreboard.css'

export const ScoreBoardRow = (props) => {

    const { player, score, total } = props

    return (
      <tr className={styles.row}>
          <td className={styles.row_player_name}>
              {player.name}
          </td>
          {_.map(new Array(FRAMES_COUNT), (roll, index) => (
                  <Cell
                    key={index}
                    firstRoll={score[index].firstRoll}
                    secondRoll={score[index].secondRoll}
                    isStrike={score[index].isStrike}
                    isSpare={score[index].isSpare}
                    total={score[index].totalScore}
                    hasThird={ index === FRAMES_COUNT - 1 }
                  />
            )
          )}
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

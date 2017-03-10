import React, { PropTypes } from 'react'
import _ from 'lodash'

import { Cell } from './scoreboard-row-cell'

import { FRAMES_COUNT } from '../actions/constants'

export const ScoreBoardRow = (props) => {

    const { player, score, total } = props

    return (
        <div>
            <div>
                {player.name}
            </div>
            {_.map(new Array(FRAMES_COUNT), (roll, index) => (
                    <Cell
                        key={index}
                        firstRoll={score[index].firstRoll}
                        secondRoll={score[index].secondRoll}
                        isStrike={score[index].isStrike}
                        isSpare={score[index].isSpare}
                        total={score[index].totalScore}
                    />
                )
            )}
            <td>
            {total}
            </td>
        </div>
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

import React, { PropTypes } from 'react'
import _ from 'lodash'

export const ScoreBoardRow = (props) => {

    const { player, score, total } = props

    return (
        <tr>
            <td>
                {player.name}
            </td>
            {_.map(new Array(10), (roll, index) => (
                    <td key={index}>{_.get(score, index, null)}</td>
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
        id  : PropTypes.string
    }),
    score : PropTypes.array,
    total : PropTypes.number
}

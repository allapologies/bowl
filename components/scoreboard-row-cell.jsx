import React, { PropTypes } from 'react'
import _ from 'lodash'

export const Cell = (props) => {
    const { rollsData } = props
    return (
      <td>
        {_.map(rollsData, (d, index) => <span key={index}>{d.score}</span>)}
      </td>
    )
}

Cell.propTypes = {
    rollsData: PropTypes.shape({
        rollId: PropTypes.number,
        score: PropTypes.number
    })
}

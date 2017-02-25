import React, { PropTypes } from 'react'

export const Cell = (props) => (
  <td>
      <span>{props.roll.score}</span>
  </td>
)

Cell.propTypes = {
    roll: PropTypes.shape({
        rollId: PropTypes.number,
        score: PropTypes.number
    })
}

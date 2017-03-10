import React, { PropTypes } from 'react'

export const Cell = (props) => (
    <div>
        <span>
            {props.firstRoll}
        </span>
        |
        <span>
            {props.secondRoll}
        </span>

        <span>{props.isStrike ? 'X' : null }</span>
        <span>{props.isSpare ? '/' : null }</span>
        <span><span>ttl: </span>{props.total }</span>
    </div>
)

Cell.propTypes = {
    firstRoll: PropTypes.number,
    secondRoll: PropTypes.number,
    isStrike: PropTypes.bool,
    isSpare: PropTypes.bool,
    total: PropTypes.number
}

import React, { PropTypes } from 'react'

export const Cell = (props) => (
    <div className="col">
        <div>
            <span className="first_roll">
                { props.isStrike ? 'X' : props.firstRoll }
            </span>
            <span className="second_roll">
                { props.isSpare ? '/' : props.secondRoll }
            </span>
        </div>
        <div className="total">
            <span>{ props.total }</span>
        </div>
    </div>
)

Cell.propTypes = {
    firstRoll: PropTypes.number,
    secondRoll: PropTypes.number,
    isStrike: PropTypes.bool,
    isSpare: PropTypes.bool,
    total: PropTypes.number
}

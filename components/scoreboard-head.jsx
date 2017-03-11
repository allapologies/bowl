import React from 'react'
import _ from 'lodash'

import { FRAMES_COUNT } from '../actions/constants'

export const ScoreBoardHead = () => {
    const head = new Array(FRAMES_COUNT)

    return (
        <div className="row">
            <div className="col">Player</div>
            {_.map(head, (id, key) => (
                <div
                    key={key + 1}
                    className="col"
                >
                    { key + 1}
                </div>
            ))}
            <div className="col">Total</div>
        </div>
    )
}

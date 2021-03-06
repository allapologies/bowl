import React, { PropTypes } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { playersSelector, currentScoreSelector, getScore } from '../../selectors'

import { ScoreBoardRow } from './scoreboard-row'

@connect((state) => ({
    players: playersSelector(state),
    score: currentScoreSelector(state),
    total: getScore(state)
}))
export class ScoreboardBody extends React.Component {
    static propTypes = {
        players: PropTypes.arrayOf(React.PropTypes.object),
        score: PropTypes.array,
        total: PropTypes.number
    }

    static defaultPropes = {
        score: {},
        total: 0
    }

    render () {
        const { total } = this.props
        return (
            <tbody>
                {_.map(this.props.players, (player) => {
                    const { score } = this.props

                    return (
                        <ScoreBoardRow
                            key={player.id}
                            player={player}
                            score={score}
                            total={total}
                        />
                    )
                })}
            </tbody>
        )
    }
}


import React, { PropTypes } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { playersSelector, currentScoreSelector } from '../selectors'
import { ScoreBoardRow } from './scoreboard-row'

@connect((state) => ({
    players: playersSelector(state),
    score: currentScoreSelector(state)
}))
export class ScoreboardBody extends React.Component {
    static propTypes = {
        players: PropTypes.arrayOf(React.PropTypes.object),
        score: PropTypes.array
    }

    static defaultPropes = {
        score: {}
    }

    render () {
        return (
            <tbody>
                {_.map(this.props.players, (player, index) => {
                    const { score } = this.props
                    const total = score[9].totalScore

                    return (
                      <ScoreBoardRow
                        key={index}
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


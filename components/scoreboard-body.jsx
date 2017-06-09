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
        score: PropTypes.object
    }

    static defaultPropes = {
        score: {}
    }

    render () {


        return (
            <tbody>
                {_.map(this.props.players, (player, index) => {
                    const { score } = this.props
                    const playerScore = score[player.id]
                    const total = Math.random() * index

                    return (
                      <ScoreBoardRow
                        key={index}
                        player={player}
                        score={playerScore}
                        total={total}
                      />
                    )
                })}
            </tbody>
        )
    }
}


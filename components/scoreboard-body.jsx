import React, { PropTypes } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { playersSelector } from '../selectors'
import { ScoreBoardRow } from './scoreboard-row'

@connect((state) => ({
    players: playersSelector(state)
}))
export class ScoreboardBody extends React.Component {
    static propTypes = {
        players: PropTypes.arrayOf(React.PropTypes.object)
    }

    render () {
        return (
            <tbody>
                {_.map(this.props.players, (player, index) => {
                    return <ScoreBoardRow key={index} player={player} />
                })}
            </tbody>
        )
    }
}


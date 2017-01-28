import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ScoreBoard } from './scoreboard'
import _ from 'lodash'

@connect((state) => ({
    players: state.players,
    frames: state.frames
}), (dispatch) => ({
    throwBall: () => dispatch(actions.throwBall())
}))
export class Game extends React.Component {

    static propTypes = {
        players: React.PropTypes.shape({
            players: React.PropTypes.array,
            current: React.PropTypes.string
        }),
        throwBall: React.PropTypes.func.isRequired
    }

    handleClick = () => this.props.throwBall()

    render () {
        const { players, frames } = this.props
        const playerData = _.find(players.players, (player) => player.id == players.currentPlayer)
        return (
          <div>
              <h3>{playerData.name}</h3>
              <button type='button' onClick={this.handleClick}>throw!</button>
              <ScoreBoard players={players.players} frames={frames} />
          </div>
        )
    }
}

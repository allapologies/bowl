import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ScoreBoard } from './scoreboard'
import { framesSelector, playersSelector } from '../selectors'

@connect((state) => ({
    players: playersSelector(state),
    frames: framesSelector(state)
}), (dispatch) => ({
    throwBall: () => dispatch(actions.throwBall())
}))
export class Game extends React.Component {

    static propTypes = {
        players: React.PropTypes.shape({
            players: React.PropTypes.array,
            currentPlayer: React.PropTypes.string
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
              {/*<ScoreBoard players={players.players} frames={frames} />*/}
          </div>
        )
    }
}

import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ScoreBoard } from './scoreboard'
import { getCurrentPlayerMeta } from '../selectors'

@connect((state) => ({
    currentPlayer: getCurrentPlayerMeta(state),
}), (dispatch) => ({
    throwBall: () => dispatch(actions.throwBall())
}))
export class Game extends React.Component {

    static propTypes = {
        currentPlayer: React.PropTypes.shape({
            name: React.PropTypes.string,
            id: React.PropTypes.number
        }),
        throwBall: React.PropTypes.func.isRequired
    }

    handleClick = () => this.props.throwBall()

    render () {
        const { currentPlayer } = this.props
        return (
          <div>
              <h3>{currentPlayer.name}</h3>
              <button type='button' onClick={this.handleClick}>throw!</button>
              {/*<ScoreBoard />*/}
          </div>
        )
    }
}

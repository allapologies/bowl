import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ScoreBoard } from './scoreboard'
import { getCurrentPlayerMeta, getIsFinished } from '../selectors'

@connect((state) => ({
    currentPlayer: getCurrentPlayerMeta(state),
    isFinished: getIsFinished(state)
}), (dispatch) => ({
    throwBall: () => dispatch(actions.throwBall())
}))
export class Game extends React.Component {

    static propTypes = {
        currentPlayer: React.PropTypes.shape({
            name: React.PropTypes.string,
            id: React.PropTypes.string
        }),
        throwBall: React.PropTypes.func.isRequired,
        isFinished: React.PropTypes.bool
    }

    handleClick = () => this.props.throwBall()

    render () {
        const { currentPlayer, isFinished } = this.props
        return (
          <div>
              <h3>{currentPlayer.name}</h3>
              <button type='button' onClick={this.handleClick} disabled={isFinished}>
                throw!
              </button>
              <ScoreBoard />
          </div>
        )
    }
}

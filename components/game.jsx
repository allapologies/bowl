import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ScoreBoard } from './scoreboard'
import { PinsSelection } from './pins'
import { getCurrentPlayerMeta, getIsFinished } from '../selectors'

@connect((state) => ({
    currentPlayer: getCurrentPlayerMeta(state),
    isFinished: getIsFinished(state)
}), (dispatch) => ({
    throwBall: (pins) => dispatch(actions.throwBall(pins))
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

    render() {
        const { currentPlayer, isFinished, throwBall } = this.props
        return (
            <div>
                <h3>{currentPlayer.name}</h3>
                <PinsSelection onSelect={throwBall} maxValue={10} isHidden={isFinished}/>
                <ScoreBoard />
            </div>
        )
    }
}

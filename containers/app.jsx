import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { initGame, throwABall } from '../actions'
import { ScoreBoard } from '../components'


@connect((state) => ({
      frames: state.frames
  }),
  (dispatch) => ({
      initGame: () => dispatch(initGame()),
      throwABall: () => dispatch(throwABall())
  })
)
export class App extends React.Component {
    static propTypes = {
        frames: PropTypes.object,
        initGame: PropTypes.func,
        throwABall: PropTypes.func
    }

    componentWillMount () {
        this.props.initGame()
    }

    onClickHandler = () => this.props.throwABall()

    render () {
        const { frames } = this.props
        const players = ['Aleksandr']
        return (
            <div className="container">
                <h5>Bowling</h5>
                <button className="btn btn-success" onClick={this.onClickHandler}>Throw a ball!</button>
                <h6>Frame: { frames.current } </h6>
                <ScoreBoard frames={frames.data} players={players} />
            </div>
        )
    }
}

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Players, Game, Results } from '../components'
import { resumeGame } from '../actions'

@connect((state) => ({
    step: state.steps.step,
}), (dispatch) => ({
    resumeGame: (players) => dispatch(resumeGame(players))
}))
export class App extends React.Component {

    static propTypes = {
        step: PropTypes.number,
        resumeGame: PropTypes.func
    }

    componentWillMount () {
        this.props.resumeGame(['Alex', 'John'])
    }

    render () {
        const { step } = this.props
        return (
          <div className="container">
              { step === 1 && <Players /> }
              { step === 2 && <Game /> }
              { step === 3 && <Results /> }
          </div>
        )
    }
}

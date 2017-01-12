import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Players, Game, Results } from '../components'

@connect((state) => ({
    step: state.steps.step,
}))
export class App extends React.Component {

    static propTypes = {
        step: PropTypes.number
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

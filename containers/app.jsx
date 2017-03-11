import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Players, Game, Results } from '../components'

require("./styles/styles.css");

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
          <div className={classnames("container")}>
              <h3> Bowling scoring system </h3>
              { step === 1 && <Players /> }
              { step === 2 && <Game /> }
              { step === 3 && <Results /> }
          </div>
        )
    }
}

import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { players } from '../selectors'

@connect((state) => ({
    players: players(state)
}), (dispatch) => ({
    addPlayer: (name) => dispatch(actions.addPlayer(name)),
    removePlayer: (id) => dispatch(actions.removePlayer(id)),
    startGame: () => dispatch(actions.startGame())
}))
export class Players extends React.Component {
    static propTypes = {
        addPlayer: React.PropTypes.func,
        removePlayer: React.PropTypes.func,
        startGame: React.PropTypes.func,
        players: React.PropTypes.array
    }

    constructor (props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleInput = (event) => this.setState({
        name: event.target.value
    })

    handleSubmit = (event) => {
        event.preventDefault()
        const { name } = this.state
        if (!name) {
            return
        }
        this.props.addPlayer(this.state.name)
        this.setState({
            name: ''
        })
    }

    handleRemove = (event, id) => {
        event.preventDefault()
        this.props.removePlayer(id)
    }

    handleStartClick = () => {
        if (this.props.players.length < 0) {
            return
        }

        this.props.startGame()
    }

    renderPlayers = () => {
        if (!this.props.players) {
            return null
        }

        return (
          <ul>
              {_.map(this.props.players, (player, index) => {
                  return (
                    <li key={index}>
                        {player.name}
                        <button type="button" onClick={(event) => this.handleRemove(event, player.id)}>
                            remove
                        </button>
                    </li>
                  )
              })}
          </ul>
        )
    }

    render () {
        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input
                    value={this.state.name}
                    onChange={this.handleInput}
                    placeholder="player name"
                  />
                  <button type="submit">add player</button>
              </form>
              {this.renderPlayers()}
              <button type="button" onClick={this.handleStartClick}>start!</button>
          </div>
        )
    }
}

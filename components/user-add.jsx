import React from 'react'
import _ from 'lodash'

export class UserAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleInput = (event) => this.setState({ name: event.target.value })

    renderPlayers = () => {
        if (!props.players) {
            return null
        }

        return (
          <ul>
              {_.map(props.players, (player, index) => <li key={index}>{player.name}</li>)}
          </ul>
        )
    }

    render() {
        return (
          <div>
              <form onSubmit={}>
                  <input value={this.state.name} onChange={this.handleInput} placeholder="player name"/>
                  <button type="submit"/>
              </form>
              {this.renderPlayers()}
          </div>
        )
    }
}

import React from 'react'
import _ from 'lodash'

export const ScoreBoardHead = () => {
    const head = new Array(10)

    return (
      <tbody>
          <tr>
              <td>Player</td>
              {_.map(head, (id, key) =><th key={key + 1}>{ key + 1}</th>)}
              <td>Total</td>
          </tr>
      </tbody>
    )
}

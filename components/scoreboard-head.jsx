import React from 'react'
import _ from 'lodash'

export const ScoreBoardHead = () => {
    const head = new Array(10)

    return (
      <div>
          <div>
              <div>Player</div>
              {_.map(head, (id, key) =><div key={key + 1}>{ key + 1}</div>)}
              <td>Total</td>
          </div>
      </div>
    )
}

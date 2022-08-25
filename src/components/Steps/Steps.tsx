import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'

function GameStarter() {
  const path = useTypedSelector((store) => store?.path)

  return (
    <div className="steps">
      <p>Steps:</p>
      <div className="steps-list">
        {path?.map((item, i) => {
          return (
            <div key={i} className="step">
              <span>{item}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GameStarter

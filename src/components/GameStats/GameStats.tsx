import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { resetStats } from '../../redux/actions/stats'

function GameStats() {
  const dispatch = useDispatch()

  const stats = useTypedSelector((store) => store?.stats)

  return (
      <div className="game-stats">
        <p>Win/Lose {stats.win}/{stats.lose}</p>
        <button className="btn small" onClick={() => dispatch(resetStats())}>
          <div>Reset</div>
        </button>
      </div>
  )
}

export default GameStats

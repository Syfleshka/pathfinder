import React, { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setStartPosition } from '../../redux/actions/startPosition'
import { useDispatch } from 'react-redux'
import { setPath } from '../../redux/actions/path'

function GameStarter() {
  const dispatch = useDispatch()

  const grid = useTypedSelector((store) => store?.grid)
  const turns = useTypedSelector((store) => store?.turns)
  const startPosition = useTypedSelector((store) => store?.startPosition)

  const startGame = () => {
    dispatch(setStartPosition(grid))
  }
  useEffect(() => {
    if (startPosition?.row < 1 || startPosition?.column < 1) {
      console.log(startPosition?.row, startPosition?.column < 1)
      dispatch(setStartPosition(grid))
    }
  }, [dispatch, grid, startPosition?.column, startPosition?.row])
  useEffect(() => {
    dispatch(setPath({ grid, turns, startPosition }))
  }, [dispatch, grid, startPosition, turns])

  return (
    <button className="btn margin-top" onClick={() => startGame()}>
      <div>Restart game</div>
    </button>
  )
}

export default GameStarter

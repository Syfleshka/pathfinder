import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { setGameStatus } from '../../redux/actions/gameStatus'
import Result from '../Result/Result'
import Grid from '../Grid/Grid'

function Game() {
  const dispatch = useDispatch()

  const [selectedAnswer, setSelectedAnswer] = useState({
    column: 0,
    row: 0,
  })
  const [rightAnswer, setRightAnswer] = useState({
    column: 0,
    row: 0,
  })
  const startPosition = useTypedSelector((store) => store?.startPosition)
  const path = useTypedSelector((store) => store?.path)
  const gameStatus = useTypedSelector((store) => store?.gameStatus)


  useEffect(() => {
    dispatch(setGameStatus(false))
    setRightAnswer((prevValue) => ({ ...prevValue, column: 0, row: 0 }))
    setSelectedAnswer((prevValue) => ({ ...prevValue, column: 0, row: 0 }))
  }, [startPosition, path, dispatch])

  // console.log('render gameStatus', gameStatus)
  // console.log('render selectedAnswer', selectedAnswer)
  // console.log('render rightAnswer', rightAnswer)
  // console.log('render grid', grid)
  // console.log('render startPosition', startPosition)
  // console.log('render path', path)
  // console.log('____________________________________')

  return (
    <div className="grid-holder">
      <Grid
        selectedAnswer = {selectedAnswer}
        setSelectedAnswer = {setSelectedAnswer}
        rightAnswer = {rightAnswer}
        setRightAnswer = {setRightAnswer}
      />
      {gameStatus ? (
      <Result
        selectedAnswer={selectedAnswer}
        rightAnswer={rightAnswer}
      />) : null}
    </div>
  )
}

export default Game

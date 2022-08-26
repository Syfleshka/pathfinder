import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { StartPositionPayload } from '../../redux/types/startPosition'
import { incrementLoseStats, incrementWinStats } from '../../redux/actions/stats'
import { useDispatch } from 'react-redux'

function Table() {
  const dispatch = useDispatch()

  const [isGameEnded, setIsGameEnded] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState({
    column: 0,
    row: 0,
  })
  const [rightAnswer, setRightAnswer] = useState({
    column: 0,
    row: 0,
  })
  const grid = useTypedSelector((store) => store?.grid)
  const startPosition = useTypedSelector((store) => store?.startPosition)
  const path = useTypedSelector((store) => store?.path)

  const calculateRightAnswer = () => {
    const position = {
      column: startPosition.column,
      row: startPosition.row,
    }
    path?.forEach((item) => {
      switch (item) {
        case 'left':
          position.column -= 1
          break
        case 'right':
          position.column += 1
          break
        case 'up':
          position.row -= 1
          break
        case 'down':
          position.row += 1
          break
      }
    })
    setRightAnswer(position)
  }

  const isStartPosition = (
    row: number,
    column: number,
    compareData: StartPositionPayload
  ) => {
    return row === compareData.row && column === compareData.column
  }
  const isRightAnswer = (row: number, column: number) => {
    return row === rightAnswer.row && column === rightAnswer.column
  }

  const checkAnswer = (row: number, column: number) => {
    if (!isGameEnded) {
      setIsGameEnded(true)
      calculateRightAnswer()
      setSelectedAnswer({
        row,
        column,
      })
    }
  }

  const showPopup = () => {
    console.log('Is game ended', isGameEnded)
    let popup = ''
    if (isGameEnded) {
      if (
        selectedAnswer.row === rightAnswer.row &&
        selectedAnswer.column === rightAnswer.column
      ) {
        popup = 'You win!'
        dispatch(incrementWinStats())
      } else {
        popup = 'You lose!'
        dispatch(incrementLoseStats())
      }
    }
    return popup
  }
  const popup = showPopup()

  useEffect(() => {
    setIsGameEnded(false)
    setRightAnswer({ column: 0, row: 0 })
    setSelectedAnswer({ column: 0, row: 0 })
  }, [startPosition, path])

  const generateTable = (rows: number, columns: number) => {
    return [
      Array.from({ length: rows }, (x, y) => y + 1).map((i) => (
        <div className="row" key={i}>
          {Array.from({ length: columns }, (x, y) => y + 1).map((j) => (
            <div
              className={`column${
                isStartPosition(i, j, startPosition) &&
                !isGameEnded &&
                selectedAnswer.row !== i &&
                selectedAnswer.column !== j
                  ? ' start-position'
                  : ''
              }${isRightAnswer(i, j) ? ' right-answer' : ''}${
                !isRightAnswer(i, j) &&
                selectedAnswer.row === i &&
                selectedAnswer.column === j
                  ? ' wrong-answer'
                  : ''
              }`}
              key={j}
              id={`row-${i}_column-${j}`}
              onClick={() => checkAnswer(i, j)}
            >
              <p>{[i, j]}</p>
            </div>
          ))}
        </div>
      )),
    ]
  }

  console.log('render')

  return (
      <div className="grid">
        {generateTable(grid.rows, grid.columns)}
        {popup ? (
          <div className="grid-popup">{popup}</div>
        ) : null}
      </div>
  )
}

export default Table

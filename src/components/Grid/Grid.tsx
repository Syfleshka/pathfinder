import React from 'react'
import { setGameStatus } from '../../redux/actions/gameStatus'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'

function Grid(props: { // @ts-ignore
  selectedAnswer, setSelectedAnswer, rightAnswer, setRightAnswer  }) {

  const dispatch = useDispatch()

  const grid = useTypedSelector((store) => store?.grid)
  const startPosition = useTypedSelector((store) => store?.startPosition)
  const path = useTypedSelector((store) => store?.path)
  const gameStatus = useTypedSelector((store) => store?.gameStatus)

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
    props.setRightAnswer(position)
  }

  const isStartPosition = (row: number, column: number) => {
    return row === startPosition.row && column === startPosition.column
  }

  const isRightAnswer = (row: number, column: number) => {
    return row === props.rightAnswer.row && column === props.rightAnswer.column
  }

  const checkAnswer = (row: number, column: number) => {
    if (!gameStatus) {
      dispatch(setGameStatus(true))
      calculateRightAnswer()
      props.setSelectedAnswer({
        row,
        column,
      })
    }
  }

  const generateTable = (rows: number, columns: number) => {
    return [
      Array.from({ length: rows }, (x, y) => y + 1).map((i) => (
        <div className="row" key={i}>
          {Array.from({ length: columns }, (x, y) => y + 1).map((j) => (
            <div
              className={`column${
                isStartPosition(i, j) &&
                !gameStatus &&
                props.selectedAnswer.row !== i &&
                props.selectedAnswer.column !== j
                  ? ' start-position'
                  : ''
              }${isRightAnswer(i, j) ? ' right-answer' : ''}${
                !isRightAnswer(i, j) &&
                props.selectedAnswer.row === i &&
                props.selectedAnswer.column === j
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

  return <div className='grid'>
    {generateTable(grid?.rows, grid?.columns)}
  </div>
}

export default Grid
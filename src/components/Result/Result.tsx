import React from 'react'
import {
  incrementLoseStats,
  incrementWinStats,
} from '../../redux/actions/stats'
import { useDispatch } from 'react-redux'

interface Answer {
  column: number
  row: number
}

function Result(props: { selectedAnswer: Answer; rightAnswer: Answer }) {
  const dispatch = useDispatch()

  const showPopup = () => {
    if (
      props.selectedAnswer.row === props.rightAnswer.row &&
      props.selectedAnswer.column === props.rightAnswer.column
    ) {
      dispatch(incrementWinStats())
      return 'You win!'
    } else {
      dispatch(incrementLoseStats())
      return 'You lose!'
    }
  }

  return <div className="grid-popup">{showPopup()}</div>
}

export default Result

import { PathActionTypes, SetPathPayload } from '../types/path'
import { GridPayload } from '../types/grid'
import { StartPositionPayload } from '../types/startPosition'

const getPossibleTurns = (
  position: StartPositionPayload,
  grid: GridPayload
) => {
  const possibleTurns = []
  position.column > 1 && possibleTurns.push('left')
  position.column < grid.columns && possibleTurns.push('right')
  position.row > 1 && possibleTurns.push('up')
  position.row < grid.rows && possibleTurns.push('down')
  return possibleTurns
}

function generatePath(
  grid: GridPayload,
  turns: number,
  startPosition: StartPositionPayload
) {
  const position = {
    column: startPosition.column,
    row: startPosition.row,
  }
  const turnsList: string[] = []
  for (let i = 0; i < turns; i++) {
    const possibleTurns = getPossibleTurns(position, grid)
    const getRandomTurn =
      possibleTurns[Math.floor(Math.random() * possibleTurns.length)]
    turnsList.push(getRandomTurn)

    switch (getRandomTurn) {
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
  }

  return turnsList
}

export const setPath = (payload: SetPathPayload) => ({
  type: PathActionTypes.SET_PATH,
  payload: generatePath(payload.grid, payload.turns, payload.startPosition),
})

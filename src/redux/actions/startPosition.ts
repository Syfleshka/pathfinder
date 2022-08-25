import { GridPayload } from '../types/grid'
import { StartPositionActionTypes } from '../types/startPosition'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export const setStartPosition = (payload: GridPayload) => ({
  type: StartPositionActionTypes.SET_START_POSITION,
  payload: {
    row: getRandomInt(payload.rows) + 1,
    column: getRandomInt(payload.columns) + 1,
  },
})

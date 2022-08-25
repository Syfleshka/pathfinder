import { GridActionTypes, GridPayload } from '../types/grid'

export const setGrid = (payload: GridPayload) => ({
  type: GridActionTypes.SET_GRID,
  payload,
})

export enum GridActionTypes {
  SET_GRID = 'SET_GRID',
}

export interface GridPayload {
  columns: number
  rows: number
}

interface SetGrid {
  type: GridActionTypes.SET_GRID
  payload: GridPayload
}

export type Grid = SetGrid

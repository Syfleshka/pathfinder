import { Grid, GridActionTypes } from '../types/grid'

const initialState = {
  columns: 3,
  rows: 3,
}

const grid = (state = initialState, { type, payload }: Grid) => {
  switch (type) {
    case GridActionTypes.SET_GRID:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default grid

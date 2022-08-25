import { Turns, TurnsActionTypes } from '../types/turns'

const initialState = 5

const grid = (state = initialState, { type, payload }: Turns) => {
  switch (type) {
    case TurnsActionTypes.SET_TURNS:
      return payload
    default:
      return state
  }
}

export default grid

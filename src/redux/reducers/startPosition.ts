import { StartPosition, StartPositionActionTypes } from '../types/startPosition'

const initialState = {
  column: 0,
  row: 0,
}

const startPosition = (
  state = initialState,
  { type, payload }: StartPosition
) => {
  switch (type) {
    case StartPositionActionTypes.SET_START_POSITION:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default startPosition

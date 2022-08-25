import { Path, PathActionTypes } from '../types/path'

const initialState = ['']

const path = (state = initialState, { type, payload }: Path) => {
  switch (type) {
    case PathActionTypes.SET_PATH:
      return payload
    default:
      return state
  }
}

export default path

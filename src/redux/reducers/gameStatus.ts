import { GameStatus, GameStatusTypes } from '../types/gameStatus'

const initialState = false

const gameStatus = (state = initialState, { type, payload }: GameStatus) => {
  switch (type) {
    case GameStatusTypes.SET_GAME_STATUS:
      return payload
    default:
      return state
  }
}

export default gameStatus

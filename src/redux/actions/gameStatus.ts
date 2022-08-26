import { GameStatusTypes } from '../types/gameStatus'


export const setGameStatus = (payload: boolean) => ({
  type: GameStatusTypes.SET_GAME_STATUS,
  payload,
})

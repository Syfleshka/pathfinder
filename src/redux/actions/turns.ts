import { TurnsActionTypes } from '../types/turns'

export const setTurns = (payload: number) => ({
  type: TurnsActionTypes.SET_TURNS,
  payload,
})

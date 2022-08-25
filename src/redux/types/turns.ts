export enum TurnsActionTypes {
  SET_TURNS = 'SET_TURNS',
}

interface SetTurns {
  type: TurnsActionTypes.SET_TURNS
  payload: number
}

export type Turns = SetTurns

export enum GameStatusTypes {
  SET_GAME_STATUS = 'SET_GAME_STATUS',
}

interface SetGameStatus {
  type: GameStatusTypes.SET_GAME_STATUS
  payload: boolean
}

export type GameStatus = SetGameStatus

export enum StartPositionActionTypes {
  SET_START_POSITION = 'SET_START_POSITION',
}

export interface StartPositionPayload {
  column: number
  row: number
}

interface SetStartPosition {
  type: StartPositionActionTypes.SET_START_POSITION
  payload: StartPositionPayload
}

export type StartPosition = SetStartPosition

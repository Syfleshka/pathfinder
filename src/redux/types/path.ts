import { GridPayload } from './grid'
import { StartPositionPayload } from './startPosition'

export enum PathActionTypes {
  SET_PATH = 'SET_PATH',
}

export interface SetPathPayload {
  grid: GridPayload
  turns: number
  startPosition: StartPositionPayload
}

interface SetPath {
  type: PathActionTypes.SET_PATH
  payload: string[]
}

export type Path = SetPath

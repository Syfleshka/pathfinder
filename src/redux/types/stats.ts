export enum StatsActionTypes {
  INCREMENT_WIN = 'INCREMENT_WIN',
  INCREMENT_LOSE = 'INCREMENT_LOSE',
  RESET_STATS = 'RESET_STATS'
}

export interface StatsPayload {
  win: number
  lose: number
}

interface SetStats {
  type: StatsActionTypes
  payload: StatsPayload
}

export type Stats = SetStats

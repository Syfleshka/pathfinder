import { StatsActionTypes } from "../types/stats";

export const incrementWinStats = () => ({
  type: StatsActionTypes.INCREMENT_WIN,
})
export const incrementLoseStats = () => ({
  type: StatsActionTypes.INCREMENT_LOSE,
})
export const resetStats = () => ({
  type: StatsActionTypes.RESET_STATS,
})
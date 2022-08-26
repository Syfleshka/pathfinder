import { Stats, StatsActionTypes } from '../types/stats'

const initialState = {
  win: 0,
  lose: 0,
}

const stats = (state = initialState, { type }: Stats) => {
  switch (type) {
    case StatsActionTypes.INCREMENT_WIN:
      return { ...state, win: state.win + 1 }
    case StatsActionTypes.INCREMENT_LOSE:
      return { ...state, lose: state.lose + 1 }
    case StatsActionTypes.RESET_STATS:
      return { ...state, lose: 0, win: 0 }
    default:
      return state
  }
}

export default stats

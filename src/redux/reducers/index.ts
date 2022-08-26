import { combineReducers } from 'redux'
import theme from './theme'
import grid from './grid'
import turns from './turns'
import startPosition from './startPosition'
import path from './path'
import stats from './stats'

const reducer = combineReducers({
  theme,
  grid,
  turns,
  startPosition,
  path,
  stats
})

export default reducer

export type RootState = ReturnType<typeof reducer>

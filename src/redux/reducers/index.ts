import { combineReducers } from 'redux'
import theme from './theme'

const reducer = combineReducers({
  theme,
})

export default reducer

export type RootState = ReturnType<typeof reducer>

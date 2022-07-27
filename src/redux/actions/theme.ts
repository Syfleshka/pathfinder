import { ThemeActionTypes } from '../types/theme'

export const setTheme = (payload: string) => ({
  type: ThemeActionTypes.SET_THEME,
  payload,
})

import { Theme, ThemeActionTypes } from '../types/theme'

const detectTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

const initialState = detectTheme()

const theme = (state = initialState, { type, payload }: Theme) => {
  switch (type) {
    case ThemeActionTypes.SET_THEME:
      return payload
    default:
      return state
  }
}

export default theme

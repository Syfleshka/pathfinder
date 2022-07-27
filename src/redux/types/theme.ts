export enum ThemeActionTypes {
  SET_THEME = 'SET_THEME',
}

interface SetTheme {
  type: ThemeActionTypes.SET_THEME
  payload: string
}

export type Theme = SetTheme

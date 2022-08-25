import * as ThemeActionCreators from './theme'
import * as GridActionCreators from './grid'
import * as TurnActionCreators from './turns'
import * as StartPositionActionCreators from './startPosition'

const ActionCreators = {
  ...ThemeActionCreators,
  ...GridActionCreators,
  ...TurnActionCreators,
  ...StartPositionActionCreators,
}

export default ActionCreators

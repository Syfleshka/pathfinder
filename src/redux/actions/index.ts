import * as ThemeActionCreators from './theme'
import * as GridActionCreators from './grid'
import * as TurnActionCreators from './turns'
import * as StartPositionActionCreators from './startPosition'
import * as StatsActionCreators from './stats'
import * as GameStatusActionCreators from './gameStatus'

const ActionCreators = {
  ...ThemeActionCreators,
  ...GridActionCreators,
  ...TurnActionCreators,
  ...StartPositionActionCreators,
  ...StatsActionCreators,
  ...GameStatusActionCreators
}

export default ActionCreators

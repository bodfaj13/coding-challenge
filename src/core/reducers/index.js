import { combineReducers } from 'redux'
import tableReducer from './tableReducer'

const rootReducer = combineReducers({
  users: tableReducer
})

export default rootReducer
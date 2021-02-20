import {combineReducers} from 'redux'
import userReducer from './user'
import labelReducer from './label'

const rootReducer = combineReducers({user: userReducer, label: labelReducer})

export default rootReducer
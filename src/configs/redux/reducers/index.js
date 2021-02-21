import {combineReducers} from 'redux'
import userReducer from './user'
import labelReducer from './label'
import taskReducer from './task'

const rootReducer = combineReducers({user: userReducer, label: labelReducer, task: taskReducer})

export default rootReducer
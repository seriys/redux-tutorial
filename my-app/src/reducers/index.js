import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import flip from './flip'

export default combineReducers({
    todos,
    visibilityFilter,
    flip
})

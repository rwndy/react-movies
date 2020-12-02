import { combineReducers } from 'redux'
import toPages from './toPages'
import getMovies from './getMovies'

export default combineReducers({
  toPages, getMovies
})
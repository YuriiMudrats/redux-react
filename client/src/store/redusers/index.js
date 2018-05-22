import {combineReducers} from 'redux'
import user from './user'
import page from './page'
import {routerReducer } from 'react-router-redux'
export default combineReducers({
   user,
   page,
   routing: routerReducer
})
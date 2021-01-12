import { combineReducers } from 'redux'
import followersReducer from './followers/reducer'
import viewsReducer from './views/reducer'
import viewReducer from './views/reducer'

const rootReducer = combineReducers({
  views: viewsReducer,
  followers: followersReducer
})

export default rootReducer
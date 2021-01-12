import { ADD_FOLLOWER, REMOVE_FOLLOWER } from './types'

const initialState = {
  count: 829
}

const followersReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_FOLLOWER: 
      return {
        ...state,
        count: state.count + 1,
      }
      case REMOVE_FOLLOWER:
        return {
          ...state,
          count: state.count - 1,
        }
    default: return state;
  }
}

export default followersReducer
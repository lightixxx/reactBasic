import { ADD_FOLLOWER, REMOVE_FOLLOWER } from './types';

export const addFollower = () => {
  return {
    type: ADD_FOLLOWER
  }
}

export const removeFollower = () => {
  return {
    type: REMOVE_FOLLOWER
  }
}
import * as types from '../constants/ActionTypes'

export function addNewUser(name) {
  return { type: types.ADD_NEW_USER, name }
}

export function addFriend(id) {
  return { type: types.ADD_FRIEND, id }
}

export function removeFriend(id) {
  return { type: types.REMOVE_FRIEND, id }
}

export function addLike(id) {
  return { type: types.ADD_LIKE, id }
}

export function removeLike(id) {
  return { type: types.REMOVE_LIKE, id }
}
import * as types from '../constants/ActionTypes'

export function addNewUser(name) {
  return { type: types.ADD_NEW_USER, name }
}

export function addRemoveFriend(id) {
  return { type: types.ADD_REMOVE_FRIEND, id }
}

export function addRemoveLike(id) {
  return { type: types.ADD_REMOVE_LIKE, id }
}

export function showAll() {
  return { type: types.SHOW_ALL_FRIENDS }
}

export function showOnline() {
  return { type: types.SHOW_ONLINE_FRIENDS }
}

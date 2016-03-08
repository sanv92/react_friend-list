import { ADD_NEW_USER, ADD_REMOVE_FRIEND, ADD_REMOVE_LIKE } from '../constants/ActionTypes'

/*
const initialState = [
  {
    name: '',
    friend: false,
    online: false,
    like: 0
  }
]
*/

const initialState = [
  {
    id: 1,
    name: 'Sander',
    friend: false,
    online: false,
    like: 0
  },
  {
    id: 2,
    name: 'Alex',
    friend: false,
    online: false,
    like: 0
  },
  {
    id: 3,
    name: 'Sander',
    friend: false,
    online: true,
    like: 0
  }
]

export default function friends(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER:
      return [
        ...state,
        {
          id: state.reduce((maxId, friend) => Math.max(friend.id, maxId), -1) + 1,
          name: action.name,
          friend: false,
          online: false,
          like: 0
        }
      ]

    case ADD_REMOVE_FRIEND:
      return state.map(friend =>
        friend.id === action.id ?
          Object.assign({}, friend, { friend: !friend.friend }) :
          friend
      )

    case ADD_REMOVE_LIKE:
      return state.map(friend =>
        friend.id === action.id ?
          Object.assign({}, friend, { like: (friend.like) ? 0 : 1 }) :
          friend
      )

/*
    case REMOVE_LIKE:
      return state.map(friend =>
        friend.id === action.id ?
          Object.assign({}, friend, { like: 0 }) :
          friend
      )
*/

    default:
      return state
  }
}
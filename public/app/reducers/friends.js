import { ADD_NEW_USER, ADD_FRIEND, REMOVE_FRIEND, ADD_LIKE, REMOVE_LIKE } from '../constants/ActionTypes'

const initialState = [
  {
    name: '',
    friend: false,
    online: false,
    like: 0
  }
]

export default function friends(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          name: '',
          friend: false,
          online: false,
          like: 0
        }
      ]

    case ADD_REMOVE_FRIEND:
      return state.map(friend =>
        friend.id === action.id ?
          Object.assign({}, friend, { friend: !todo.completed }) :
          friend
      )

    case ADD_LIKE:
      return state.map(friend =>
        friend.id === action.id ?
          Object.assign({}, friend, { like: 1 }) :
          friend
      )

    case REMOVE_LIKE:
      return state.map(friend =>
        friend.id === action.id ?
          Object.assign({}, friend, { like: 0 }) :
          friend
      )

    default:
      return state
  }
}
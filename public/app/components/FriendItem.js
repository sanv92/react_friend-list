import React, { Component, PropTypes } from 'react'

class FriendItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { friend, addRemoveLike, addRemoveFriend } = this.props

    return (
      <li className="list-group-item">
        <div><h4>{friend.name}</h4></div>
        <div className="btn-group">
          <button type="button" className="btn btn-default" onClick={() => addRemoveLike(friend.id)}>{ (friend.like === 0) ? 'Like' : 'Remove Like' }</button>
          <button type="button" className="btn btn-default" onClick={() => addRemoveFriend(friend.id)}>{ (friend.friend === false) ? 'Add Friend' : 'Remove Friend' }</button>
        </div>
      </li>
    )
  }
}

FriendItem.propTypes = {
  friend: PropTypes.object.isRequired,
  addRemoveFriend: PropTypes.func.isRequired,
  addRemoveLike: PropTypes.func.isRequired
}

export default FriendItem

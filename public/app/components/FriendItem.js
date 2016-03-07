import React, { Component, PropTypes } from 'react'

class FriendItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { friend } = this.props

    return (
      <li className="list-group-item">
        {friend.name}
      </li>
    )
  }
}

FriendItem.propTypes = {
  friend: PropTypes.object.isRequired
}

export default FriendItem

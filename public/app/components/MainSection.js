import React, { Component, PropTypes } from 'react'
import FriendItem from './FriendItem'
import { SHOW_ALL_FRIENDS, SHOW_ONLINE_FRIENDS } from '../constants/FriendsFilters'

class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = { filter: SHOW_ALL_FRIENDS }
  }

  render() {
    const { friends, actions } = this.props

    return (
      <section className="main">
        <div className="row">
          <div className="col-md-4">.col-md-6</div>
          <div className="col-md-4 col-md-push-4">
            <ul className="list-group">
              {friends.map(friend =>
                <FriendItem key={friend.id} friend={friend} {...actions} />
              )}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

MainSection.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection

import React, { Component, PropTypes } from 'react'
import FriendItem from './FriendItem'
import Footer from './Footer'
import { SHOW_ALL_FRIENDS, SHOW_ONLINE_FRIENDS } from '../constants/FriendsFilters'

const FRIEND_FILTERS = {
  [SHOW_ALL_FRIENDS]: friend => true,
  [SHOW_ONLINE_FRIENDS]: friend => friend.online
}

class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = { filter: SHOW_ALL_FRIENDS }

    this.handleShow = this.handleShow.bind(this)
  }

  handleShow(filter) {
    console.log(filter);
    this.setState({ filter })
  }

  renderFooter() {
    return (
      <Footer onShow={this.handleShow} />
    )
  }

  render() {
    const { friends, actions } = this.props
    const { filter } = this.state
    const filteredFriends = friends.filter(FRIEND_FILTERS[filter])

    return (
      <section className="main">
        <div className="row">
          <div className="col-md-4">
            {this.renderFooter()}
            <ul className="list-group">
              {filteredFriends.map(friend => {
                if(friend.friend) {
                  return (
                    <FriendItem key={friend.id} friend={friend} {...actions} />
                  )
                }
              })}
            </ul>
            [All: {friends.filter(friend => { return (friend.friend) }).length}]
            [Online: {friends.filter(friend => { return (friend.friend && friend.online) }).length}]
          </div>
          <div className="col-md-4 col-md-push-4">
            <ul className="list-group">
              {friends.map(friend => {
                if(!friend.friend) {
                  return (
                    <FriendItem key={friend.id} friend={friend} {...actions} />
                  )
                }
              })}
            </ul>
            [{friends.filter(friend => { return (!friend.friend) }).length}]
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

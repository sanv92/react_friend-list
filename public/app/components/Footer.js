import React, { PropTypes, Component } from 'react'
import { SHOW_ALL_FRIENDS, SHOW_ONLINE_FRIENDS } from '../constants/FriendsFilters'

const FILTER_TITLES = {
  [SHOW_ALL_FRIENDS]: 'All',
  [SHOW_ONLINE_FRIENDS]: 'Online'
}

class Footer extends Component {
    //const { completedCount, onClearCompleted } = this.props

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { onShow } = this.props

    return (
      <a onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  render() {
    return (
      <footer className="footer">
        <ul className="filters">
          {[ SHOW_ALL_FRIENDS, SHOW_ONLINE_FRIENDS ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </footer>
    )
  }
}

export default Footer

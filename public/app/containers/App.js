import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import MainSection from '../components/MainSection'
import * as FriendActions from '../actions'

class App extends Component {
  render() {
    const { friends, actions } = this.props
    return (
      <div>
        <UserForm addNewUser={actions.addNewUser} />
        <MainSection friends={friends} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  friends: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FriendActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

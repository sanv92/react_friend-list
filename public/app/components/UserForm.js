import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(name) {
    if (name.length) {
      this.props.addNewUser(name)
    }
  }

  render() {
    return (
      <div>
        <h1>Friends</h1>
        <div className="input-group input-group-lg">
          <span className="input-group-addon">Name:</span>
          <TodoTextInput onSave={this.handleSave} />
        </div>
        <br />
      </div>
    )
  }
}

UserForm.propTypes = {
  addNewUser: PropTypes.func.isRequired
}

export default UserForm
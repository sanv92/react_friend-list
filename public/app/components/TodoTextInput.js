import React, { Component, PropTypes } from 'react'

class TodoTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: (this.props.name || '')
    }

    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const name = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(name)
      this.setState({ name: '' })
    }
  }

  handleChange(e) {
    const name = e.target.value.trim()
    this.setState({ name: name })
  }

  handleBlur(e) {
    const name = e.target.value.trim()
    this.props.onSave(name)
  }

  render() {
    return (
        <input className="form-control"
          type="text"
          value={this.state.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default TodoTextInput

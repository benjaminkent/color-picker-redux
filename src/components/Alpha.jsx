import React, { Component } from 'react'

import { updateAlpha } from '../actions/alpha-actions'
import { connect } from 'react-redux'

class Alpha extends Component {
  onUpdateAlpha = event => {
    this.props.onUpdateAlpha(event.target.value)
  }

  render() {
    return (
      <li>
        <p>Alpha</p>
        <input
          onChange={this.onUpdateAlpha}
          type="range"
          min="0"
          max="100"
          value={this.props.alpha}
        />
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    alpha: state.alpha
  }
}

const mapActionsToProps = {
  onUpdateAlpha: updateAlpha
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Alpha)

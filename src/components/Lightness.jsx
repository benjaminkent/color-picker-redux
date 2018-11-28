import React, { Component } from 'react'

import { updateLightness } from '../actions/lightness-actions'
import { connect } from 'react-redux'

class Lightness extends Component {
  onUpdateLightness = event => {
    this.props.onUpdateLightness(event.target.value)
  }

  render() {
    return (
      <li>
        <p>Lightness</p>
        <input
          onChange={this.onUpdateLightness}
          type="range"
          min="0"
          max="100"
          value={this.props.lightness}
        />
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    lightness: state.lightness
  }
}

const mapActionsToProps = {
  onUpdateLightness: updateLightness
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Lightness)

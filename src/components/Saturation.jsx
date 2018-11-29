import React, { Component } from 'react'

import { updateSaturation } from '../actions/saturation-actions'
import { connect } from 'react-redux'

class Saturation extends Component {
  onUpdateSaturation = event => {
    this.props.onUpdateSaturation(event.target.value)
  }

  render() {
    return (
      <li>
        <p className="hsl">Saturation</p>
        <input
          onChange={this.onUpdateSaturation}
          type="range"
          min="0"
          max="100"
          value={this.props.saturation}
        />
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    saturation: state.saturation
  }
}

const mapActionsToProps = {
  onUpdateSaturation: updateSaturation
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Saturation)

import React, { Component } from 'react'

import { updateHue } from '../actions/hue-actions'
import { connect } from 'react-redux'

class Hue extends Component {
  onUpdateHue = event => {
    this.props.onUpdateHue(event.target.value)
  }

  render() {
    return (
      <li>
        <p className="hsl">Hue</p>
        <input
          onChange={this.onUpdateHue}
          type="range"
          min="0"
          max="360"
          value={this.props.hue}
        />
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    hue: state.hue
  }
}

const mapActionsToProps = {
  onUpdateHue: updateHue
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Hue)

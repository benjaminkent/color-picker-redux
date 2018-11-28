import React, { Component } from 'react'

class Alpha extends Component {
  render() {
    return (
      <li>
        <p>Alpha</p>
        <input
          onChange={this.onUpdateHue}
          type="range"
          min="0"
          max="100"
          value={this.props.hue}
        />
      </li>
    )
  }
}

export default Alpha

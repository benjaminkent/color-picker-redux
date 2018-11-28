import React, { Component } from 'react'

import { updateHue } from '../actions/hue-actions'
import { connect } from 'react-redux'

class Hue extends Component {
  constructor(props) {
    super(props)

    this.onUpdateHue = this.onUpdateHue.bind(this)
  }

  onUpdateHue(event) {
    this.props.onUpdateHue(event.target.value)
  }

  render() {
    return (
      <div>
        <li>
          <p>Hue</p>
          <input
            onChange={this.onUpdateHue}
            type="range"
            min="0"
            max="360"
            value={this.props.hue}
          />
        </li>
      </div>
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

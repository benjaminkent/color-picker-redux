import React, { Component } from 'react'

import { connect } from 'react-redux'

import Hue from './components/Hue'
import Saturation from './components/Saturation'

import { updateHue } from './actions/hue-actions'
import { updateSaturation } from './actions/saturation-actions'
import { updateLightness } from './actions/lightness-actions'

export class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateSaturation = this.onUpdateSaturation.bind(this)
    this.onUpdateLightness = this.onUpdateLightness.bind(this)
  }

  onUpdateSaturation(event) {
    this.props.onUpdateSaturation(event.target.value)
  }

  onUpdateLightness(event) {
    this.props.onUpdateLightness(event.target.value)
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>Color Picker!</h1>
        </header>

        <main className="all-content">
          <aside>
            <div className="values">
              <p
                className="hslValue"
                style={{
                  color: `hsl(${this.props.hue}, 
                    ${this.props.saturation}%, 
                    ${this.props.lightness}%)`
                }}
              >
                H:
                {this.props.hue} S:
                {this.props.saturation}% L:
                {this.props.lightness}%
              </p>
            </div>

            <div
              className="color-window"
              style={{
                backgroundColor: `hsl(${this.props.hue}, 
                  ${this.props.saturation}%,
                  ${this.props.lightness}%)`
              }}
            />
          </aside>

          <div>
            <ul>
              <Hue />
              <Saturation />
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
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hue: state.hue,
    saturation: state.saturation,
    lightness: state.lightness
  }
}

const mapActionsToProps = {
  onUpdateHue: updateHue,
  onUpdateSaturation: updateSaturation,
  onUpdateLightness: updateLightness
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)

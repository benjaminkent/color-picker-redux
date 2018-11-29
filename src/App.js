import React, { Component } from 'react'

import { connect } from 'react-redux'

import Hue from './components/Hue'
import Saturation from './components/Saturation'
import Lightness from './components/Lightness'
import Alpha from './components/Alpha'

class App extends Component {
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
                  color: `hsla(${this.props.hue}, 
                    ${this.props.saturation}%, 
                    ${this.props.lightness}%, 
                    ${this.props.alpha}%)`
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
                backgroundColor: `hsla(${this.props.hue}, 
                  ${this.props.saturation}%,
                  ${this.props.lightness}%, 
                  ${this.props.alpha}%)`
              }}
            />
            <p
              style={{
                color: `hsla(${this.props.hue}, 
                  ${this.props.saturation}%, 
                  ${this.props.lightness}%,
                  ${this.props.alpha}%)`
              }}
            >
              Alpha: {this.props.alpha}%
            </p>
          </aside>

          <div>
            <ul>
              <Hue />
              <Saturation />
              <Lightness />
              <Alpha />
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
    lightness: state.lightness,
    alpha: state.alpha
  }
}

export default connect(mapStateToProps)(App)

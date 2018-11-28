import { UPDATE_HUE } from '../actions/hue-actions'

export default function hueReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_HUE:
      return payload.hue
    default:
      return state
  }
}

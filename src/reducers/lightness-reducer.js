import { UPDATE_LIGHTNESS } from '../actions/lightness-actions'

export default function lightnessReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_LIGHTNESS:
      return payload.lightness
    default:
      return state
  }
}

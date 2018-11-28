import { UPDATE_SATURATION } from '../actions/saturation-actions'

export default function saturationReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_SATURATION:
      return payload.saturation
    default:
      return state
  }
}

import { UPDATE_ALPHA } from '../actions/alpha-actions'

export default function alphaReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_ALPHA:
      return payload.alpha
    default:
      return state
  }
}

export const UPDATE_ALPHA = 'alpha:updateAlpha'

export function updateAlpha(newAlpha) {
  return {
    type: UPDATE_ALPHA,
    payload: {
      alpha: newAlpha
    }
  }
}

export const UPDATE_HUE = 'hue:updateHue'

export function updateHue(newHue) {
  return {
    type: UPDATE_HUE,
    payload: {
      hue: newHue
    }
  }
}

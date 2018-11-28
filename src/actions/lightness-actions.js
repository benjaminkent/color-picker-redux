export const UPDATE_LIGHTNESS = 'lightness:updateLightness'

export function updateLightness(newLightness) {
  return {
    type: UPDATE_LIGHTNESS,
    payload: {
      lightness: newLightness
    }
  }
}

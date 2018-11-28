export const UPDATE_SATURATION = 'saturation:updateSaturation'

export function updateSaturation(newSaturation) {
  return {
    type: UPDATE_SATURATION,
    payload: {
      saturation: newSaturation
    }
  }
}

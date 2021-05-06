export default {
  SETTINGS_SET_SPACE(state, payload) {
    if(payload) state.space = { ...payload }
  },
  SETTINGS_SET_LOCALE(state, payload) {
    if(payload) state.locale = { ...payload }
  }
}

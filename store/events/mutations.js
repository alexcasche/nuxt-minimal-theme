export default {
  EVENTS_ADD_HISTORY(state, payload) {
    state.history = [ ...state.history, payload ]
  },
  EVENTS_CLEAR_HISTORY(state) {
    state.history = []
  }
}

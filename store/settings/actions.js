export default {
  async settingsSetSpace({ commit }) {
    const space = await this.$nacelle.client.data.space()
    commit('SETTINGS_SET_SPACE', space)
  }
}

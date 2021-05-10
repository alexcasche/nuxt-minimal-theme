import vuexPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  vuexPersistedState({
    key: 'vuex',
    paths: [
      'cart'
    ],
  })(store)
}

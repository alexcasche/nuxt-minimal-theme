export default function({ store, route }) {
  return store.commit('events/EVENTS_ADD_HISTORY', {
    name: route.name,
    path: route.path,
    query: route.query
  })
}

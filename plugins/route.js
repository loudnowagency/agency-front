export default ({ store, app }) => {
  app.router.afterEach((to, from) => {
    store.commit('ui/setIsNavOpen', false)
  })
}

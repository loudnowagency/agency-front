const state = () => ({
  theme: 'dark',
  isNavOpen: false,
})

const mutations = {
  setTheme: (state, theme) => { state.theme = theme },
  setIsNavOpen: (state, isNavOpen) => { state.isNavOpen = isNavOpen },
}

export {
  state,
  mutations,
}

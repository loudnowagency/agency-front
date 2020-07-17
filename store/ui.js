import storage from '@/services/storage'

const state = () => ({
  theme: 'dark',
  isNavOpen: false,
  isCookieConsentOpen: false,
})

const mutations = {
  setTheme: (state, theme) => { state.theme = theme },
  setIsNavOpen: (state, isNavOpen) => { state.isNavOpen = isNavOpen },
  setIsCookieConsentOpen: (state, isCookieConsentOpen) => {
    state.isCookieConsentOpen = isCookieConsentOpen
    storage.set('ui/isCookieConsentOpen', isCookieConsentOpen)
  },
}

const actions = {
  checkCookie ({ commit }) {
    const isCookieConsentOpen = storage.get('ui/isCookieConsentOpen') !== undefined
     ? storage.get('ui/isCookieConsentOpen')
     : true
    commit('setIsCookieConsentOpen', isCookieConsentOpen)
  },

  acceptCookie ({ commit }) {
    commit('setIsCookieConsentOpen', false)
  }
}

export {
  state,
  mutations,
  actions,
}

import ls from 'local-storage'
import pkg from '../package.json'

const locationKey = () => {
  try {
    return `${pkg.name}:${pkg.version}@${location.host}`
  } catch {
    return false
  }
}

export default {
  set (key, val) {
    if (locationKey()) {
      const locationStore = ls.get(locationKey()) || {}
      ls.set(locationKey(), {
        ...locationStore,
        [key]: val,
      })
    }
  },

  get (key) {
    if (locationKey()) {
      const locationStore = ls.get(locationKey())
      if (locationStore) return locationStore[key]
    }
  },
}

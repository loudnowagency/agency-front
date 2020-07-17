<template>
  <div :class="`theme-${theme}`">
    <div class="layout c-bg1 c-t1 t4">
      <CookieConsent v-if="isCookieConsentOpen" />
      <Navbar class="layout__navbar" />
      <div
        class="layout__main"
        :class="{'-blur': isNavOpen}">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from '@/components/Navbar'
import CookieConsent from '@/components/CookieConsent'

export default {
  name: 'Layout',
  components: { Navbar, CookieConsent },
  computed: {
    ...mapState('ui', ['theme', 'isNavOpen', 'isCookieConsentOpen']),
  },
  mounted () {
    this.checkCookie()
  },
  watch: {
    isNavOpen () {
      const body = document.querySelector('body')
      if (this.isNavOpen) {
        body.style.overflow = 'hidden'
      } else {
        body.style.removeProperty('overflow')
      }
    },
  },
  methods: {
    ...mapActions('ui', ['checkCookie'])
  }
}
</script>

<style lang="scss" scoped>
.theme-light {
  background: $bg-1-light;
}
.theme-dark {
  background: $bg-1;
}

.layout {
  position: relative;
  z-index: 0;
  width: 100vw;
  overflow-x: hidden;
}

.layout__main {
  transition: opacity .3s $ease, transform .3s $ease;
  &.-blur {
    opacity: .3;
  }
}
</style>


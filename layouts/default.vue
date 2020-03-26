<template>
  <div :class="`theme-${theme}`">
    <!-- <LazyHydrate ssr-only> -->
      <div class="layout c-bg1 c-t1 t4">
        <div class="layout__start"></div>
        <Navbar class="layout__navbar" />
        <div
          class="layout__main"
          :class="{'-blur': isNavOpen}">
          <nuxt/>
        </div>
      </div>
    <!-- </LazyHydrate> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LazyHydrate from 'vue-lazy-hydration'
import Navbar from '@/components/Navbar'

export default {
  name: 'Layout',
  components: { Navbar, LazyHydrate },
  computed: {
    ...mapState('ui', ['theme', 'isNavOpen']),
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
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/reset.scss';
  @import '@/assets/styles/globals.scss';
  @import '@/assets/styles/utils.scss';
  @import '@/assets/styles/transitions.scss';
</style>

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

.layout__start {
  height: 1px;
}

.layout__navbar {
  margin-top: 50px;
}

.layout__main {
  transition: opacity .3s $ease, transform .3s $ease;
  &.-blur {
    opacity: .3;
  }
}

@media(max-width: 1024px) {
  .layout__navbar {
    margin-top: 0;
  }
}
</style>


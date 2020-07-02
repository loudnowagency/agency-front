<template>
  <div :class="`theme-${theme}`">
    <div class="layout c-bg1 c-t1 t4">
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
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar'

export default {
  name: 'Layout',
  components: { Navbar },
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


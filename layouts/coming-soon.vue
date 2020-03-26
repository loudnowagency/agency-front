<template>
  <div class="layout c-bg1 c-t1 t4 theme-dark">
    <nuxt/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Layout',
}
</script>

<style lang="scss">
  @import '@/assets/styles/reset.scss';
  @import '@/assets/styles/globals.scss';
  @import '@/assets/styles/utils.scss';
</style>

<style lang="scss" scoped>
.theme-dark {
  background: $bg-1;
}
</style>


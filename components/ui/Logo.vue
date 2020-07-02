<template>
  <div class="logo">
    <InlineSvg
      class="logo__img"
      :src="src" />
    <span class="logo__meta">
      {{ meta }}
    </span>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Logo',
  components: { InlineSvg },
  props: {
    src: String,
    meta: String,
  },
}
</script>

<style lang="scss" scoped>
.logo__img {
  height: 24px;
}

.logo__meta {
  display: block;
  font-family: $font-tech;
  opacity: .4;
  font-size: 11px;
}
</style>

<template>
  <div class="logo">
    <InlineSvg
      class="logo__img"
      :height="height"
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
    height: {
      type: Number,
      default: () => 24,
    },
  },
}
</script>

<style lang="scss" scoped>
.logo__meta {
  display: block;
  font-family: $font-tech;
  opacity: .4;
  font-size: 11px;
}

.logo__img {
  max-width: 70%;
}

@media (max-width: 1024px) {
  .logo__meta {
    font-size: 10px;
  }
}
</style>

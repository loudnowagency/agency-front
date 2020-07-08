<template>
  <img
    class="lazyload"
    data-sizes="auto"
    data-expand="100"
    :src="critical && cdnSrc"
    :data-src="!critical && cdnSrc">
</template>

<script>
export default {
  name: 'Picture',
  props: {
    src: String,
    critical: Boolean,
  },
  computed: {
    cdnSrc() {
      if (process.env.NODE_ENV !== 'production') return this.src
      const cdnUrl = 'https://ankkxsjjn.cloudimg.io/v7'
      const prodHost = '/loudnow.agency'
      const options = '?force_format=webp'
      return  cdnUrl + prodHost + this.src + options
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  opacity: 0;
  transform: scale(.95);
  transition: opacity .5s $ease, transform .5s $ease;
}

img[src] {
  transform: scale(1);
  opacity: 1;
}
</style>

<template>
  <div
    class="shape"
    :class="`-${type}`">
  </div>
</template>

<script>
export default {
  name: 'Shape',
  props: {
    type: String,
    required: true,
  },
}
</script>

<style lang="scss" scoped>
.shape {
  &.-rectangle {
    width: 10px;
    height: 10px;
    background: #4864E1;
  }

  &.-circle {
    width: 10px;
    height: 10px;
    background: #4864E1;
    border-radius: 50%;
  }

  &.-triangle {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid #4864E1;
  }
}
</style>

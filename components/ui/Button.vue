<template>
  <div
    class="button t6"
    :class="{
      'c-bga': type == 'primary',
      'c-t1i': type == 'primary',
      'c-bg1': type == 'secondary',
    }">
    <div class="button__slot">
      <slot />
      <div
        class="button__shape"
        :class="{
          'c-bg1': type == 'primary',
          'c-bga': type == 'secondary',
        }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
  }
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  display: inline-flex;
  font-family: $font-tech;
  text-transform: uppercase;
  white-space: nowrap;
  height: 50px;
  flex-shrink: 0;
}

.button__slot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
}

.button__shape {
  border-radius: 50px;
  width: 6px;
  height: 6px;
  margin-left: 10px;
  transform: translateX(7px);
}
</style>

<template>
  <div class="burger" :class="{'-active': active}">
    <div class="burger__lines"></div>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  props: {
    active: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.burger {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.burger__lines {
  position: relative;
  height: 1px;
  width: 50%;
  left: 50%;
  background: currentColor;
  transform: translateX(-50%);

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: calc(50% - .5px);
    left: 0%;
    height: 1px;
    width: 100%;
    background-color: currentColor;
    transition: transform .2s $ease;
    transform-origin: center right;
  }

  &::before { transform: translateY(-5px) scaleX(.8); }
  &::after  { transform: translateY(5px) scaleX(.5); }

  .-active & {
    &::before { transform: translateY(-5px) scaleX(0) !important; }
    &::after  { transform: translateY(5px) scaleX(0) !important; }
  }
}
</style>

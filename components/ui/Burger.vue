<template>
  <div class="burger" :class="[{'-active': active}, innerClass]">
    <div class="lines"></div>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  props: {
    active: Boolean,
    innerClass: Object,
  },
}
</script>

<style lang="scss" scoped>
.burger {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  transition: transform .3s $ease;
  cursor: pointer;
  pointer-events: none;

  &.-scrolled {
    pointer-events: all;
    transform: translateX(100px);
  }
}

.lines {
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
    transition: transform .2s $ease;
  }

  &::before { transform: translateY(-5px) scaleX(0); }
  &::after  { transform: translateY(5px) scaleX(0); }

  .-scrolled & {
    &::before { transform: translateY(-5px) scaleX(.8); }
    &::after  { transform: translateY(5px) scaleX(.5); }
  }

  .-active & {
    &::before { transform: translateY(-5px) scaleX(0); }
    &::after  { transform: translateY(5px) scaleX(0); }
  }
}

@media(max-width:1024px) {
  .burger {
    pointer-events: all;
    transform: translateX(10px);

    &.-scrolled {
      transform: translateX(10px);
    }
  }

  .lines {
    &::before { transform: translateY(-5px) scaleX(.8); }
    &::after  { transform: translateY(5px) scaleX(.5); }
  }
}
</style>

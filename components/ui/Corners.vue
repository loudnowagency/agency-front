<template>
  <div class="corners">
    <div class="corner -tl"></div>
    <div class="corner -tr"></div>
    <div class="corner -br"></div>
    <div class="corner -bl"></div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Corners',
}
</script>

<style lang="scss" scoped>
.corners {
  position: relative;
}

.corner {
  position: absolute;
  pointer-events: none;
  border-color: currentColor;
  border-style: solid;
  border-width: 0;
  width: 4px;
  height: 4px;

  &.-tl { top: 0; left: 0; border-left-width: 1px; border-top-width: 1px; }
  &.-tr { top: 0; right: 0; border-right-width: 1px; border-top-width: 1px; }
  &.-br { bottom: 0; right: 0; border-right-width: 1px; border-bottom-width: 1px; }
  &.-bl { bottom: 0; left: 0; border-left-width: 1px; border-bottom-width: 1px; }
}
</style>

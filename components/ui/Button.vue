<template>
  <div
    class="button t5"
    :class="innerClass && innerClass">
    <div class="border"></div>
    <div class="background"></div>
    <div class="button__slot">
      <Corners class="button__corners" />
      <slot />
      <Shape
        class="button__mobile-shape"
        type="circle" />
    </div>
    <div class="button__icon">
      <div class="separator"></div>
      <Corners class="button__corners -second" />
      <Shape type="circle" />
    </div>
  </div>
</template>

<script>
import Corners from '@/components/ui/Corners'
import Shape from '@/components/ui/Shape'

export default {
  name: 'Button',
  components: { Corners, Shape },
  props: {
    innerClass: String,
  }
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  font-family: $font-tech;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover .background { opacity: .1; }

  &.-primary {
    .background {
      background: $fill-a;
      opacity: 1;
    }
    /deep/ .shape { background: $fill-1 !important; }
  }
}

.border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border: 1px solid currentColor;
  opacity: .1;
}

.separator {
  position: absolute;
  top: 0;
  left: -1px;
  width: 1px;
  height: 100%;
  pointer-events: none;
  background: currentColor;
  opacity: .1;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: currentColor;
  opacity: .02;
  transition: opacity .2s $ease;
}

.button__slot {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

.button__mobile-shape {
  display: none;
}

.button__corners {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &.-second {
    left: -1px;
    width: calc(100% + 1px);
  }
}

.button__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-left: auto;
}

@media(max-width: 1024px) {
  .button {
    font-size: 12px;
  }

  .button__slot {
    padding-left: 30px;
    padding-right: 30px;
  }

  .button__mobile-shape {
    display: block;
    transform: translateX(12px) scale(0.5);
  }

  .button__icon {
    display: none;
  }
}
</style>

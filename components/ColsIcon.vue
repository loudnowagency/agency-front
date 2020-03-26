<template>
  <div class="cols-icon container">
    <div class="grid">
      <div
        v-for="(item, i) in items"
        :key="`cols-icon-item-${i}`"
        class="cols-icon__item">
          <div class="cols-icon__icon-wrap">
            <Shape
              v-if="item.shape"
              class="cols-icon__shape"
              :type="item.shape" />
            <InlineSvg
              class="cols-icon__icon"
              :src="item.icon"/>
          </div>
          <strong>{{ item.headline }}</strong>
          <p class="c-t2">{{ item.copy }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Shape from '@/components/ui/Shape'

export default {
  name: 'ColsIcon',
  components: { Shape, InlineSvg },
  props: {
    items: { type: Array, required: true },
  },
}
</script>

<style lang="scss" scoped>
.cols-icon__item {
  width: col(4);
  padding-right: 100px;
}

strong,
p {
  margin-top: 50px;
  display: block;
}

.cols-icon__icon-wrap {
  position: relative;
  width: 50px;
  height: 50px;
}

.cols-icon__shape {
  position: absolute;
  top: 0;
  right: -20px;
}

.cols-icon__icon {
  width: 100%;
  height: 100%;
}

@media(max-width: 1024px) {
  .cols-icon__item {
    width: col(12);
    padding-right: 0;
    & + & { margin-top: 70px; }
  }

  strong,
  p {
    margin-top: 30px;
  }
}
</style>

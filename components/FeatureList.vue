<template>
  <div class="feature-list">
    <div class="container">
      <div class="grid">
        <strong class="feature-list__title" v-scrollanim="scrollanim">
          {{ title }}
        </strong>
        <div class="feature-list__items">
          <div class="grid">
            <div
              v-for="(item, i) in items"
              v-scrollanim="scrollanim"
              :key="`feature-list-item-${i}`"
              class="feature-list__item">
              <strong class="t3">{{ item.headline }}</strong>
              <p class="c-t2">{{ item.copy }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureList',
  props: {
    title: { type: String, required: true},
    items: { type: Array, required: true},
  },
  data () {
    return {
      scrollanim: {
        name: 'trans-el-from-bottom-fade',
        delay: 200,
        stagger: true,
      },
    }
  },
}
</script>

<style lang="scss">
.feature-list {
  & + & {
    padding-top: 0 !important;
    .feature-list__title { top: 50px; }
  }
}
</style>

<style lang="scss" scoped>
.feature-list {
  position: relative;
  padding: 120px 0;
}

.feature-list__title {
  top: 170px;
  position: absolute;
}

.feature-list__items {
  width: col(9);
  margin-left: push(3);
}

.feature-list__item {
  margin-bottom: 50px;
  padding-top: 50px;
  padding-left: 0;
  padding-right: 50px;
  width: col(4);
  border-top: 1px solid $border-color;

  p { margin-top: 20px; }
}

@media(max-width: 1024px) {
  .feature-list__title {
    margin-bottom: 50px;
    position: static;
  }

  .feature-list__items {
    width: col(12);
    margin-left: push(0);
  }

  .feature-list__item {
    width: col(12);
    padding-top: 20px;
    padding-right: 20px;
  }
}
</style>

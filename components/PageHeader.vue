<template>
  <div class="page-header container" :class="`layout-${layout || 1}`">
    <div class="grid">
      <div
        v-if="tag1 || tag2"
        class="page-header__tag">
        <strong
          v-if="tag1"
          v-scrollanim="scrollanim">
          {{ tag1 }}
        </strong>
        <br />
        <span
          v-if="tag2"
          class="c-t2"
          v-scrollanim="scrollanim">
          {{ tag2 }}
        </span>
      </div>

      <h3 class="page-header__heading">
        <p v-scrollanim="scrollanim">{{ headline }}</p>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    tag1: { type: String },
    tag2: { type: String },
    headline: { type: String, required: true },
    layout: { type: String },
    delay: { type: Number },
  },
  data () {
    return {
      scrollanim: {
        name: 'trans-el-from-bottom-fade',
        delay: this.delay || 200,
        stagger: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.page-header__tag {
  font-family: $font-tech;

  strong,
  span {
    display: inline-block;
  }

  .layout-1 & {
    width: col(3);
  }
  .layout-2 & {
    width: col(7);
  }
  .layout-3 & {
    width: col(8);
    margin-left: push(2);
  }
  .layout-4 & {
    width: col(6);
  }
}

.page-header__heading {

  p { white-space: pre-wrap; }

  .layout-1 & {
    width: col(7);
    margin-left: push(1);
  }
  .layout-2 & {
    margin-top: 50px;
    width: col(7);
  }
  .layout-3 & {
    margin-top: 50px;
    width: col(8);
    margin-left: push(2);
  }
  .layout-4 & {
    width: col(12);
  }
}

@media(max-width: 1024px) {
  .page-header {
    height: 100vh;
    max-height: 850px;
    // min-height: 400px;
    display: flex;
    align-items: center;
  }

  .page-header__tag {
    line-height: 1.4;
    width: col(12) !important;
    margin-left: push(0) !important;
  }

  .page-header__heading {
    margin-top: 50px;
    width: col(12) !important;
    margin-left: push(0) !important;
  }
}
</style>

<template>
  <section class="page-intro">
    <div class="container">
      <div class="page-intro__grid grid">
        <div class="page-intro-copy t3" v-scrollanim="scrollanim">
          <p v-for="(copy, i) in leftCopy"
            :key="`leftCopy-${i}`">
            {{ copy }}
          </p>
        </div>
        <div class="page-intro-note c-t2" v-scrollanim="scrollanim">
          <p v-for="(copy, i) in rightCopy"
            :key="`rightCopy-${i}`">
            {{ copy }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageIntro',
  props: {
    leftCopy: Array,
    rightCopy: Array,
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

<style lang="scss" scoped>
.page-intro__grid {
  p {  margin-top: 20px; }
}

.page-intro-copy {
  width: col(5);
  margin-left: push(2);
}

.page-intro-note {
  width: col(3);
  margin-left: push(1);
}

@media(max-width: 1024px) {
  .page-intro-copy {
    width: col(12);
    margin-left: 0;
  }

  .page-intro-note {
    margin-top: 50px;
    width: col(12);
    margin-left: 0;
  }
}
</style>

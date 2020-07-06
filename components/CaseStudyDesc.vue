<template>
  <div class="case-study-desc">
    <div class="container">
      <div class="grid">
        <div class="case-study-desc__tag">
          <h5 class="c-t2">Online:</h5>
          <a :href="url" rel="noopener nofollow" target="_blank">{{ url.replace('https://', '') }}</a>
        </div>
        <div class="case-study-desc__headline t1">
          <p>{{ headline }}</p>
          <span v-if="headlineAuthor" class="t5">{{ headlineAuthor }}</span>
        </div>
        <p
          v-for="(text, i) in copy"
          :key="`case-study-desc__copy--${i}`"
          class="case-study-desc__copy c-t2 t3">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyDesc',
  props: {
    url: String,
    headline: String,
    headlineAuthor: String,
    copy: Array,
  },
}
</script>

<style lang="scss" scoped>
.case-study-desc {
  padding: 120px 0;
}

.case-study-desc__tag {
  order: 0;
  width: col(3);
  margin-left: push(1);

  a {
    display: block;
    margin-top: 10px;
  }
}

.case-study-desc__headline {
  order: 2;
  width: col(5);
  margin-top: 50px;
  margin-left: push(1);
}

.case-study-desc__copy {
  width: col(5);
  order: 5;
  margin-left: push(7);
  margin-top: 50px;

  &:nth-of-type(1) {
    order: 1;
    margin-left: push(3);
    margin-top: 0;
  }

  &:nth-of-type(2) {
    order: 3;
    margin-left: push(1);
  }
}

@media(max-width: 1024px) {
  .case-study-desc__tag {
    width: col(12);
    margin-left: 0;
  }

  .case-study-desc__headline {
    order: 0;
    width: col(12);
    margin-top: 50px;
    margin-left: 0;

    span { margin-top: 10px; display: block; }
  }

  .case-study-desc__copy {
    width: col(12);
    order: 0;
    margin-left: 0;
    margin-top: 30px;

    &:nth-of-type(1) {
      order: 0;
      margin-left: 0;
      margin-top: 50px;
    }

    &:nth-of-type(2) {
      order: 0;
      margin-left: 0;
    }
  }
}
</style>

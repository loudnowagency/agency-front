<template>
  <div class="list-bold">
    <div class="container">
      <div class="grid">
        <span class="list-bold__tag -i1">{{ tag1 }}</span>
        <span class="list-bold__tag -i2">{{ tag2 }}</span>
        <template v-for="(item, i) in items">
          <div
            class="list-bold__spacer"
            :key="`list-bold__spacer-${i}`">
          </div>
          <h3
            class="list-bold__headline"
            :key="`list-bold__headline-${i}`"
            v-html="item.title">
          </h3>
          <article
            class="list-bold__copy c-t2"
            :key="`list-bold__copy-${i}`"
            v-html="item.content">
          </article>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBold',
  props: {
    tag1: String,
    tag2: String,
    items: Array,
  },
}
</script>

<style lang="scss">
.list-bold__copy {
  strong { display: block; }
  p { margin-bottom: 20px; }
  ul {
    list-style: disc inside;
    margin-bottom: 20px;
  }
}
</style>

<style lang="scss" scoped>
.list-bold {
  padding: 120px 0;
}

.list-bold__tag {
  font-family: $font-tech;
  &.-i1 { width: col(4); }
  &.-i2 { width: col(8); }
}

.list-bold__spacer {
  margin-top: 100px;
  width: col(12);
}

.list-bold__headline {
  width: col(4);
}

.list-bold__copy {
  width: col(6);
}

@media (max-width: 1024px) {
  .list-bold__headline {
    width: col(12);
    font-size: 50px;
  }

  .list-bold__copy {
    margin-top: 30px;
    width: col(12);
  }
}
</style>

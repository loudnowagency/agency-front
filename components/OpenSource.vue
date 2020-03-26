<template>
  <div class="open-source container">
    <div class="grid">
      <h6 class="open-source__tag">
        Giving Back
      </h6>

      <h3 class="open-source__headline" v-scrollanim="scrollanim">
        We love open source
      </h3>

      <div class="open-source__slider">
        <div class="open-source__items grid">
          <div class="open-source__item" v-scrollanim="scrollanim">
            <a href="" class="c-ta">Github</a>
          </div>
          <div class="open-source__item" v-scrollanim="scrollanim">
            <a href="" class="c-ta">Github</a>
          </div>
          <div class="open-source__item" v-scrollanim="scrollanim">
            <a href="" class="c-ta">Github</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenSource',
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
.open-source__tag {
  margin-bottom: 20px;
  width: col(11);
  margin-left: push(1);
}

.open-source__headline {
  padding-right: 30px;
  width: col(4);
  margin-left: push(1);
}

.open-source__slider {
  width: col(6);
  margin-left: push(1);
}

.open-source__items {
  flex-wrap: nowrap;
}

.open-source__item {
  padding: 30px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: col(4);
  height: 300px;
  margin-left: 30px;
  border: 1px solid $border-color;

  a { margin-top: auto; }
}

@media(max-width: 1024px) {
  .open-source__headline {
    width: col(8);
  }

  .open-source__slider {
    margin-top: 30px;
    width: col(11);
    margin-left: push(0);
  }

  .open-source__item {
    width: col(6);
    height: col(6);
  }
}
</style>

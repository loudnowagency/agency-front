<template>
  <div class="contact c-bg1">
    <div class="contact__section section c-bg1">
      <div class="contact__container container">
        <form class="contact__grid grid">
          <div class="contact__tag">I want</div>
          <h1 class="contact__title">Work Together</h1>
          <div class="contact__field">
            <input class="c-bg1" type="text">
            <label>Name</label>
          </div>
          <div class="contact__field">
            <input class="c-bg1" type="text">
            <label>Last Name</label>
          </div>
          <div class="contact__field">
            <input class="c-bg1" type="text">
            <label>Email</label>
          </div>
          <div class="contact__field">
            <input class="c-bg1" type="text">
            <label>Phone</label>
          </div>
          <div class="contact__field">
            <input class="c-bg1" type="text">
            <label>Budget</label>
          </div>
          <div class="contact__field">
            <input class="c-bg1" type="text">
            <label>Description</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'

export default {
  name: 'Contact',
  components: { Hydrate },
  transition: {
    name: 'trans-page-from-bottom',
    mode: 'in-out',
  },
  beforeRouteLeave (to, from, next) {
    this.$el.style.transform = `translateY(-${window.scrollY}px)`
    next()
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 200px;
}

.contact__section {
  min-height: calc(100vh - 200px);
}

.contact__grid {
  position: relative;
}

.contact__tag {
  position: absolute;
  top: 3px;
  left: col(1);
  font-family: $font-tech;
  text-transform: uppercase;
}

.contact__title {
  width: col(9);
  padding-left: col(2);
  margin-bottom: 15px;
}

.contact__field {
  position: relative;
  width: col(4);
  margin-left: col(1);
  margin-top: 50px;
  border-bottom: 1px solid $border-color;
  font-size: 15px;
  line-height: 45px;

  &:nth-of-type(even) {
    margin-left: col(2);
  }

  label {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  input {
    width: 100%;
    appearance: none;
    border: none;
    outline: none;
    color: currentColor;

    &:focus + label {
      display: none;
    }
  }
}
</style>

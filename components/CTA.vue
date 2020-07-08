<template>
  <div class="cta">
    <div class="container">
      <div class="cta__grid grid c-bga c-t1i">
        <h3 class="cta__title">
          {{ title }}
        </h3>
        <p class="cta__copy">
          {{ copy }}
        </p>
        <a
          class="cta__button"
          href="mailto:hi@loudnow.agency"
          target="_blank">
          <Button
            type="secondary">
            {{ buttonText }}
          </Button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'

export default {
  name: 'CTA',
  components: { Button },
  props: {
    title: String,
    copy: String,
    buttonText: String,
  },
}
</script>

<style lang="scss" scoped>
.cta__grid {
  padding: 40px 60px;
}

.cta__title {
  width: 100%;
  margin-bottom: 20px;
}

.cta__copy {
  width: calc(100% - 320px);
}

.cta__button {
  margin-left: auto;
}

@media (max-width: 1024px) {
  .cta__grid {
    padding: 30px;
  }

  .cta__title {
    width: 100%;
    margin-bottom: 20px;
  }

  .cta__copy {
    width: 100%;
    font-size: 12px;
  }

  .cta__button {
    margin-top: 40px;
    margin-left: 0;
  }
}
</style>

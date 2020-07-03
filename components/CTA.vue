<template>
  <div class="cta">
    <div class="container">
      <div class="cta__grid grid c-bga c-t1i">
        <h3 class="cta__title">
          No time to hire?
        </h3>
        <p class="cta__copy">
          Have you ever missed a deadline, turned down a client due to lack of development resources or got lost in workload? We're here to help. Our studio plays supporting role in digital projects' planing, execution and delivery.
        </p>
        <Button
          class="cta__button"
          type="secondary">
          Work With Us
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'

export default {
  name: 'CTA',
  components: { Button },
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

</style>

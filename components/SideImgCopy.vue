<template>
  <div class="side-img-copy container">
    <div class="side-img-copy__body">
      <h3 class="side-img-copy__headline">No time to hire?</h3>
      <div class="side-img-copy__copy c-t2">Have you ever missed a deadline, turned down a client due to lack of development resources or got lost in the workload? We're here to help.</div>
      <div class="side-img-copy__copy c-t2">Our studio plays supportive role in digital projects' planing, execution and delivery. </div>
      <div class="side-img-copy__copy">
        <nuxt-link to="/approach">
          <Button>See Our Approach</Button>
        </nuxt-link>
      </div>
    </div>
    <div class="side-img-copy__wrap">
      <Picture
        class="side-img-copy__img"
        src="/images/people.jpg" />
    </div>
  </div>
</template>

<script>
import Picture from '@/components/ui/Picture'
import Button from '@/components/ui/Button'

export default {
  name: 'SideImgCopy',
  components: { Button, Picture },
}
</script>

<style lang="scss" scoped>
.side-img-copy {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.side-img-copy__body {
  width: col(5);
  padding: 50px 0;
}

.side-img-copy__headline {
  min-width: 295px;
  width: col(2);
}

.side-img-copy__copy {
  margin-top: 20px;
  min-width: 250px;
  padding-right: 50px;

  &:nth-of-type(1) {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-top: 50px;
  }
}

.side-img-copy__wrap {
  width: col(6);
  margin-left: push(1);
}

.side-img-copy__img {
  width: 100%;
}

@media(max-width: 1024px) {
  .side-img-copy__body {
    width: col(12);
  }
  .side-img-copy__wrap {
    width: col(12);
    margin-left: 0;
    order: -1;
  }
}
</style>

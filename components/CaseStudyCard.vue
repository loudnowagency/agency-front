<template>
  <div class="container">
    <div
      class="case-study-card"
      :class="{'-masthead': isMasthead}">
      <Picture
        class="case-study-card__bg"
        :src="`/images/${bg}`" />
        <Logo
          :src="projectLogo"
          :meta="`Client: ${clientName}`" />
        <p class="case-study-card__title">
          {{ title }}
        </p>
        <Button
          v-if="buttonText"
          class="case-study-card__button"
          type="secondary">
          {{ buttonText }}
        </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Picture from '@/components/ui/Picture'
import Logo from '@/components/ui/Logo'

export default {
  name: 'CaseStudyCard',
  components: { Button, Picture, Logo },
  props: {
    bg: String,
    clientName: String,
    projectLogo: String,
    title: String,
    buttonText: String,
    isMasthead: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.case-study-card {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-height: 100vh;
  min-height: 500px;
  width: 100%;
  padding: 30px 60px;
}

.case-study-card__bg {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-study-card__title {
  max-width: 300px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  // text-transform: uppercase;
  .-masthead & {
    font-size: 50px;
    max-width: 450px;
  }
}

.case-study-card__button {
  margin-top: 10px;
}

@media(max-width: 1024px) {
  .case-study-card {
    min-height: 350px;
    padding: 30px;
  }

  .case-study-card__title {
    font-size: 20px;
    max-width: 200px;
  }
}
</style>

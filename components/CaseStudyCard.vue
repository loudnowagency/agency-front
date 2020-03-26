<template>
  <div class="section">
    <div
      class="case-study-card"
      :class="`-${theme}`">
      <div class="section">
        <Picture
          class="case-study-card__bg lazyload"
          :src="`/images/${bg}`" />
        <div class="case-study-card__container container">
          <div class="case-study-card__grid grid">
            <span>Client</span>
            <InlineSvg
              class="case-study-card__client-logo"
              :src="`/logos/${clientLogo}`" />
          </div>
          <InlineSvg
            class="case-study-card__project-logo"
            :src="`/logos/${projectLogo}`" />
          <Button
            v-if="buttonText"
            class="case-study-card__button"
            :class="`-${theme}`">
            {{ buttonText }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Button from '@/components/ui/Button'
import Picture from '@/components/ui/Picture'

export default {
  name: 'CaseStudyCard',
  components: { Button, Picture, InlineSvg },
  props: {
    bg: String,
    clientLogo: String,
    projectLogo: String,
    theme: String,
    buttonText: String,
  },
}
</script>

<style lang="scss" scoped>
.case-study-card {
  position: relative;
  z-index: 0;
  display: flex;
  max-height: 100vh;
  height: 700px;
  width: 100%;

  &.-dark { color: $fill-1; }
  &.-light { color: $fill-1-light; }
}

.case-study-card__container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding-top: 90px;
  padding-bottom: 90px;
  transition: transform .7s ease, opacity .7s ease;
}

.case-study-card__grid {
  align-items: center;
  flex-wrap: nowrap;
  text-transform: uppercase;
}

.case-study-card__client-logo {
  height: 30px;
  margin-left: 20px;
}

.case-study-card__project-logo {
  max-width: 450px;
  margin-top: auto;
  margin-bottom: auto;
}

.case-study-card__button {
  margin-top: 10px;
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

@media(max-width: 1024px) {
  .case-study-card {
    height: 350px;
  }

  .case-study-card__container {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .case-study-card__grid {
    font-size: 10px;
  }
  .case-study-card__client-logo {
    height: 20px;
  }
  .case-study-card__project-logo {
    margin-top: 50px;
    width: 55%;
    max-width: 215px;
  }
}
</style>

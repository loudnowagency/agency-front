<template>
  <div class="masthead section c-bg1">
    <div class="container">
      <div class="navbar grid">
        <img
          :src="require('@/static/logos/ln.svg')"
          svg-inline />
        <div class="navbar__text">We're coming back soon.</div>
        <a href="mailto:hi@loudnow.agency" class="navbar__link">hi@loudnow.agency</a>
      </div>
    </div>

    <div class="masthead__container container">
      <div class="masthead__text">
        <h1 class="masthead__headline">
          Software<br/>
          Studio
        </h1>
        <p class="masthead__copy">
          We help forward-thinking companies to
          build digital experiences.
        </p>
      </div>
      <div class="masthead__visuals">
        <div class="masthead__visuals-title">Our Selected Projects:</div>
        <img class="masthead__visuals-logo" src="@/static/logos/rolling-stone.svg" />
        <div class="masthead__visuals-logo-tag">Client: XWP</div>
        <img class="masthead__visuals-logo" src="@/static/logos/dale-carnegie-2.svg" />
        <div class="masthead__visuals-logo-tag">Client: Digital Surgeons</div>
        <img class="masthead__visuals-logo" src="@/static/logos/jupiter.svg" />
        <div class="masthead__visuals-logo-tag">Client: Artbees</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'ComingSoon',
  layout: 'coming-soon',
  components: { InlineSvg, Hydrate },
}
</script>

<style lang="scss" scoped>
.masthead {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;

  @media(max-width:860px) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
}

.container {
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1400px;
}

.navbar {
  display: flex;
  align-items: center;
  height: 100px;
  font-family: $font-tech;

  @media(max-width:860px) {
    // flex-direction: column;
    // align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
}

.navbar__logo {
  svg { display: block; }
}

.navbar__text {
  text-transform: uppercase;
  margin-left: 40px;

  @media(max-width:860px) {
    width: calc(100% - 100px);
  }
}

.navbar__link {
  @include underline;
  margin-left: auto;

  @media(max-width:860px) {
    margin-left: 0;
    margin-top: 40px;
  }
}

.masthead__container {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;

  @media(max-width:860px) {
    flex-direction: column;
  }
}

.masthead__text {
  flex-shrink: 0;
  width: col(8);

  @media(max-width: 860px) {
    width: col(12);
    height: calc(100vh - 460px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.masthead__visuals {
  pointer-events: none;
  position: relative;
  width: col(4);
  font-family: $font-tech;

  @media(max-width: 860px) {
    width: col(12);
    margin-top: 100px;
  }
}

.masthead__visuals-logo {
  height: 58px;
  margin-top: 45px;

  @media(max-width: 1280px) {
    height: 40px;
  margin-top: 30px;
  }
}

.masthead__visuals-title {
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 80px;

  @media(max-width: 860px) {
    margin-bottom: 50px;
  }
}

.masthead__headline {
  font-size: 200px;
  line-height: .85;

  @media(max-width: 1280px) {
    font-size: 150px;
  }

  @media(max-width: 1024px) {
    font-size: 100px;
  }

  @media(max-width: 480px) {
    font-size: 80px;
  }
}

.masthead__copy {
  font-family: $font-tech;
  max-width: 350px;
  margin-top: 30px;

  @media(max-width: 480px) {
    font-size: 12px;
  }
}
</style>

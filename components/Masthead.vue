<template>
  <div class="masthead c-bg1">
    <div class="masthead__body container">
      <div class="grid">
        <div class="masthead__text">
          <SvgSoftwareStudio class="masthead__headline" />
          <p
            class="masthead__copy">
            We help forward-thinking companies
            build digital experiences.
          </p>
          <a
            class="masthead__button"
            href="mailto:hi@loudnow.agency"
            target="_blank">
            <Button type="primary">Work With Us</Button>
          </a>
        </div>
        <div class="masthead__slot">
          <CodeEditor />
        </div>
      </div>
    </div>
    <div class="masthead__footer c-border">
      <div class="container">
        <div class="masthead__footer-grid grid">
          <div class="masthead__footer-title">
            <span>{}</span>
            <span class="c-t2">Building Products Used By Milions</span>
          </div>
          <div class="masthead__footer-logos grid">
            <Logo
              class="masthead__footer-logo"
              v-for="(logo, i) in [
                { src: '/logos/rolling-stone.svg', meta: 'with XWP', height: 27, },
                { src: '/logos/newman.svg', meta: 'with Digital Surgeons', height: 24, },
                { src: '/logos/lovesac.svg', meta: 'with Digital Surgeons', height: 24, },
                { src: '/logos/jupiter.svg', meta: 'with Artbees', height: 30, },
              ]"
              :key="`masthead__footer-logo-${i}`"
              v-bind="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import SvgSoftwareStudio from '@/components/ui/SvgSoftwareStudio'
import CodeEditor from '@/components/CodeEditor'

export default {
  name: 'Masthead',

  components: {
    Button,
    Logo,
    SvgSoftwareStudio,
    CodeEditor,
  },
}
</script>

<style lang="scss">
.masthead {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  max-height: 1100px;
  padding-top: 100px;
}

.masthead__body {
  margin-top: auto;
  margin-bottom: auto;
}

.masthead__text {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: col(5);
}

.masthead__headline {
  max-width: 70%;
  height: auto;
}

.masthead__copy {
  font-family: $font-tech;
  max-width: 320px;
  margin-top: 25px;
}

.masthead__button {
  display: inline-block;
  margin-top: 30px;
}

.masthead__slot {
  width: col(7);
}

.masthead__footer {
  width: 100%;
  border-style: solid;
  border-width: 0;
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.masthead__footer-grid {
  display: flex;
  align-items: center;
  padding: 75px 0;
}

.masthead__footer-title {
  font-family: $font-tech;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.masthead__footer-logos {
  flex-grow: 1;
  justify-content: space-between;
  padding-left: 100px;
  transform: translateY(14px);
}

@media(max-width: 1240px) {
  .masthead__footer-grid {
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 0;
  }

  .masthead__footer-title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 12px;
  }

  .masthead__footer-logos {
    padding-left: 0;
    flex-grow: 0;
    min-width: 70%;
  }

  .masthead__footer-logo {
    padding: 0 20px;
    margin-bottom: 20px;
  }
}

@media(max-width: 1024px) {
  .masthead {
    padding-top: 150px;
    height: auto;
    max-height: none;
  }

  .masthead__text {
    width: col(12);
    margin-bottom: 50px;
  }

  .masthead__slot {
    display: none;
  }

  .masthead__headline {
    max-width: 250px;
  }

  .masthead__copy {
    font-size: 12px;
    max-width: 50%;
  }

  .masthead__button {
    margin-top: 40px;
  }

  .masthead__footer-logo {
    padding-left: 0;
    width: 50%;
  }

  .masthead__footer-logos {
    width: 100%;
  }
}
</style>

<template>
  <header
    class="navbar"
    :class="[
      {'-open': isNavOpen},
      {'-scrolled': isScrolled},
    ]">
    <nav class="navbar__container container">
      <div class="navbar__grid grid">
        <span class="navbar__logo">
          <nuxt-link class="navbar__logo-link c-ta" to="/">
            <SvgLoudNow />
          </nuxt-link>
        </span>

        <div class="navbar__panel -top grid">
          <span class="navbar__title">Loud Now Agency</span>
          <div class="navbar__panel-links">
            <nuxt-link
              v-for="(link, i) in links"
              :key="`navbar__link--${i}`"
              class="navbar__link"
              :to="link.to">
              {{ link.text }}
            </nuxt-link>
            <a href="https://github.com/loudnowagency/" class="navbar__social" rel="noopener nofollow" target="_blank">
              <InlineSvg src="/icons/github.svg" />
            </a>
          </div>
        </div>

        <div class="navbar__panel -side grid">
          <nuxt-link
            v-for="(link, i) in links"
            :key="`navbar__link--${i}`"
            class="navbar__link"
            :to="link.to">
            {{ link.text }}
          </nuxt-link>

          <div class="navbar__cta t2">
            <p><strong>Drop us a line or two, we are open for creative minds and collaborations</strong></p>
            <a
              class="navbar__email"
              href="mailto:hi@loudnow.agency">
              hi@loudnow.agency
            </a>
          </div>

          <a href="https://github.com/loudnowagency/" class="navbar__social" rel="noopener nofollow" target="_blank">
            <InlineSvg src="/icons/github.svg" />
            <span>Github</span>
          </a>
        </div>

        <Burger
          class="navbar__burger"
          :innerClass="{'-scrolled': isScrolled }"
          :active="isNavOpen"
          @click.native="setIsNavOpen(!isNavOpen)" />
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InlineSvg from 'vue-inline-svg'
import Burger from '@/components/ui/Burger'
import SvgLoudNow from '@/components/ui/SvgLoudNow'

export default {
  name: 'Navbar',
  components: { Burger, InlineSvg, SvgLoudNow },
  data () {
    return {
      isScrolled: false,
      links: [
        { to: '/', text: 'Start' },
        { to: '/studies', text: 'Studies' },
        { to: '/services', text: 'Services' },
        { to: '/approach', text: 'Approach' },
      ],
    }
  },
  watch: {
    '$route' () {
      setTimeout(() => {
        this.$el.querySelector('.navbar__panel.-side').scrollTop = 0
      }, 300)
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.isScrolled = (window.scrollY > 5)
    })
  },
  computed: {
    ...mapState('ui', ['isNavOpen']),
  },
  methods: {
    ...mapMutations('ui', ['setIsNavOpen']),
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  transform: translateZ(0);
  font-family: $font-tech;
  transition: transform $ease .2s;
}

.navbar__container { max-width: none; }
.navbar__grid { align-items: center; }

.navbar__logo {
  transition: transform .3s $ease;

  svg { display: block; }
}

.navbar__logo-link {
  position: relative;
  left: -20px;
  display: inline-flex;
  margin-right: -20px;
  padding: 20px;
}

.navbar__title {
  margin-left: 20px;
  text-transform: uppercase;
  margin-right: auto;
  transition: transform .5s $ease, opacity .5s $ease;
}

.navbar__burger {
  margin-left: auto;
  opacity: 0;
  transition: opacity .2s $ease, transform .2s $ease;
}

/deep/ .burger__lines {
  &::before { transform: translateY(-5px) scaleX(0); }
  &::after  { transform: translateY(5px) scaleX(0); }
}

.navbar__panel {
  flex-grow: 1;
  align-items: center;
  transition: transform .5s $ease, opacity .5s $ease;

  &.-side {
    pointer-events: all;
    z-index: -1;
    position: fixed;
    top: -51px;
    left: 100vw;
    width: 100vw;
    max-width: 600px;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    padding-top: 200px;
    padding-bottom: 70px;
    background: lighten($bg-1, 1%);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    .-open & {
      transform: translateX(-100%);
      opacity: 1;
    }
  }

  &.-top {
    justify-content: flex-end;
  }
}

.navbar__panel-links {
  display: flex;
  align-items: center;
  transition: transform .5s $ease, opacity .5s $ease;
}

.navbar__link {
  position: relative;
  margin-left: 40px;
  color: currentColor;
  opacity: .6;
  transition: opacity .2s $ease;

  &:hover { opacity: 1; }

  .-side & {
    max-width: 30vw;
    height: 40px;
    margin-left: 60px;
    margin-bottom: 20px;
    font-size: 18px;
  }
}

.navbar__cta {
  font-family: $font-copy;
  padding: 80px 60px;
}

.navbar__email {
  position: relative;
  display: inline-block;
  padding: 5px 0;
  margin-top: 30px;
  @include underline(2);
}

.navbar__social {
  margin-left: 60px;
  align-items: center;

  svg {
    display: block;
    height: 20px;
    width: 20px;
  }

  span {
    display: block;
    transform: translateY(2px);
    margin-left: 10px;
  }

  .-side & {
    margin-top: auto;
    display: flex;
  }
}

.nuxt-link-exact-active {
  @include underline;
  @include underline-anim-in;
  opacity: 1;

  &.navbar__logo-link::before,
  &.navbar__logo-link::after { display: none; }
  .-side & { margin-bottom: 30px; }
}


// Scrolled State
.-scrolled {
  &.navbar { pointer-events: none; }

  .navbar__logo {
    transform: translateX(-100px);
    pointer-events: all;
  }

  .navbar__burger {
    pointer-events: all;
    transform: translateX(100px);
    opacity: 1;
  }

  /deep/ .burger__lines {
    &::before { transform: translateY(-5px) scaleX(.8); }
    &::after  { transform: translateY(5px) scaleX(.5); }
  }

  .navbar__title {
    transform: translateX(-50px);
    opacity: 0;
  }

  .navbar__panel-links {
    transform: translateX(50px);
    opacity: 0;
  }
}


@media(max-width:1024px) {
  .navbar__logo {
    transform: translateX(-3px) scale(.8);

    .-scrolled & { transform: translateX(-3px) scale(.8); }
  }

  .navbar__panel {
    &.-top { display: none; }
    &.-side {
      top: 0;
      padding-top: 150px;
      padding-bottom: 150px;
      max-width: 480px;
    }
  }

  .navbar__burger {
    pointer-events: all;
    transform: translateX(10px);

    &.-scrolled {
      transform: translateX(10px);
    }
  }

  /deep/ .burger__lines {
    &::before { transform: translateY(-5px) scaleX(.8); }
    &::after  { transform: translateY(5px) scaleX(.5); }
  }

  .navbar__link {
    margin-left: 35px;
  }

  .navbar__cta {
    font-size: 18px;
    padding: 50px 60px 50px 35px;
    max-width: 415px;
  }

  .navbar__email {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .navbar__social {
    .-side & {
      margin-left: 35px;
    }
  }
}
</style>

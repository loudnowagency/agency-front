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
          <nuxt-link class="navbar__logo-link" to="/">
            <Logo />
          </nuxt-link>
        </span>

        <div class="navbar__panel -top grid">
          <nuxt-link
            v-for="(link, i) in links"
            :key="`navbar__link--${i}`"
            class="navbar__link"
            :to="link.to">
            {{ link.text }}
          </nuxt-link>
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
import Logo from '@/components/Logo'

export default {
  name: 'Navbar',
  components: { Burger, InlineSvg, Logo },
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

  &.-scrolled { pointer-events: none; }
}

.navbar__container { max-width: none; }
.navbar__grid { align-items: center; }

.navbar__logo {
  transition: transform .3s $ease;

  .-scrolled & {
    transform: translateX(-100px);
    pointer-events: all;
  }
  svg { display: block; }
}

.navbar__logo-link {
  position: relative;
  left: -20px;
  margin-right: -20px;
  display: inline-block;
  padding: 20px;
}

.navbar__burger {
  margin-left: auto;

  .-scrolled { display: block; }
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
    .-scrolled & {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
}

.navbar__link {
  position: relative;
  margin-left: 60px;
  color: currentColor;
  opacity: .6;
  text-transform: uppercase;
  transition: opacity .2s $ease;

  &:hover { opacity: 1; }

  .-side & {
    max-width: 30vw;
    height: 40px;
    margin-bottom: 20px;
    font-size: 18px;
  }
}

.navbar__cta {
  display: none;
  font-family: $font-copy;
  padding: 80px 60px;

  .-side & { display: block; }
}

.navbar__email {
  position: relative;
  display: inline-block;
  padding: 5px 0;
  margin-top: 30px;
  @include underline(2);
}

.navbar__social {
  margin-left: auto;
  display: none;
  align-items: center;

  svg {
    display: block;
    height: 20px;
    width: 20px;
  }

  span {
    transform: translateY(2px);
    margin-left: 10px;
    display: none;
  }

  .-side & {
    margin-left: 60px;
    margin-top: auto;
    display: flex;

    span { display: block; }
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

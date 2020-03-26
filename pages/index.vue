<template>
  <div class="home c-bg1">
    <div>
      <Hydrate :with-delay="2000">
        <Masthead class="home__masthead" />
      </Hydrate>
      <nuxt-link
        class="home__study-card"
        v-for="(item, i) in [
          {
            bg: 'case-study-rs.jpg',
            clientLogo: 'xwp.svg',
            projectLogo: 'rolling-stone.svg',
            theme: 'dark',
            buttonText: 'See What We Did',
            link: '/studies/rolling-stone'
          },
          {
            bg: 'case-study-dc.jpg',
            clientLogo: 'ds.svg',
            projectLogo: 'dale-carnegie.svg',
            theme: 'light',
            buttonText: 'See What We Did',
            link: '/studies/dale-carnegie'
          },
          {
            bg: 'case-study-jupiter.jpg',
            clientLogo: 'artbees.svg',
            projectLogo: 'jupiter.svg',
            theme: 'dark',
            buttonText: 'See What We Did',
            link: '/studies/jupiter'
          },
        ]"
        :to="item.link"
        :key="`home__study-card-${i}`">
        <Hydrate when-visible>
          <CaseStudyCard v-bind="item" />
        </Hydrate>
      </nuxt-link>
      <Hydrate when-visible>
        <Taas />
      </Hydrate>
      <Hydrate when-visible>
        <TechStack />
      </Hydrate>
      <Hydrate when-visible>
        <Testimonials :active="2" />
      </Hydrate>
    </div>
    <Hydrate when-visible>
      <Footer />
    </Hydrate>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import Masthead from '@/components/Masthead'
import CaseStudyCard from '@/components/CaseStudyCard'
import Taas from '@/components/Taas'
import Footer from '@/components/Footer'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'

export default {
  name: 'HomePage',
  transition: {
    name: 'trans-page-from-bottom',
    mode: 'in-out',
  },
  beforeRouteLeave (to, from, next) {
    this.$el.style.position = 'relative'
    this.$el.style.top = `-${window.scrollY}px`
    next()
  },
  components: {
    Masthead,
    CaseStudyCard,
    Taas,
    Footer,
    TechStack,
    Testimonials,
    Hydrate,
  },
}
</script>

<style lang="scss" scoped>
.home__study-card {
  display: block;
  margin-top: 100px;
}

@media(max-width: 1024px) {
  .home__masthead { margin-bottom: 100px; }
  .home__study-card { margin-top: 0; }
}
</style>

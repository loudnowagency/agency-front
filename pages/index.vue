<template>
  <div class="home c-bg1">
    <Masthead />
    <Hydrate when-visible>
      <CaseStudyRiver />
    </Hydrate>
    <Hydrate when-visible>
      <Taas />
    </Hydrate>
    <Hydrate when-visible>
      <TechStack />
    </Hydrate>
    <Hydrate when-visible>
      <Testimonials :active="2" />
    </Hydrate>
    <Hydrate when-visible>
      <Footer />
    </Hydrate>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import Masthead from '@/components/Masthead'
import CaseStudyRiver from '@/components/CaseStudyRiver'
import Taas from '@/components/Taas'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

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
    Hydrate,
    Masthead,
    CaseStudyRiver,
    Taas,
    TechStack,
    Testimonials,
    Footer,
  },
}
</script>

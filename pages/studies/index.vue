<template>
  <div class="c-bg1">
    <div class="case-studies">
      <Hydrate ssr-only>
        <PageHeader
          class="case-studies__header"
          tag1="Case Studies"
          tag2="What We Do"
          :headline="`We execute ideas from design till launch.`" />
      </Hydrate>
      <div class="case-studies__cards">
        <nuxt-link
          class="home-study-card"
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
              bg: 'case-study-jupiter.jpg',
              clientLogo: 'artbees.svg',
              projectLogo: 'jupiter.svg',
              theme: 'dark',
              buttonText: 'See What We Did',
              link: '/studies/jupiter'
            },
          ]"
          :to="item.link"
          :key="`case-study-card-${i}`">
          <Hydrate when-visible>
            <CaseStudyCard
              class="case-studies__card"
              v-bind="item" />
          </Hydrate>
        </nuxt-link>
      </div>
      <!-- <OpenSource class="case-studies__carousel" /> -->
      <Hydrate when-visible>
        <Testimonials class="case-studies__testimonials" :active="1" />
      </Hydrate>
    </div>
    <Hydrate when-visible>
      <Footer />
    </Hydrate>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import PageHeader from '@/components/PageHeader'
import CaseStudyCard from '@/components/CaseStudyCard'
import OpenSource from '@/components/OpenSource'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default {
  name: 'Studies',
  transition: {
    name: 'trans-page-from-bottom',
    mode: 'in-out',
  },
  beforeRouteLeave (to, from, next) {
    this.$el.style.transform = `translateY(-${window.scrollY}px)`
    next()
  },
  components: {
    PageHeader,
    CaseStudyCard,
    OpenSource,
    Testimonials,
    Footer,
    Hydrate,
  },
}
</script>

<style lang="scss" scoped>
.case-studies__header { padding-top: 300px; }
.case-studies__cards { margin-top: 200px; }
.case-studies__card { margin-bottom: 100px; }
.case-studies__carousel { padding-top: 150px; }
.case-studies__testimonials { margin-top: 250px; }

@media(max-width: 1024px) {
  .case-studies__header { padding-top: 100px; padding-bottom: 150px; }
  .case-studies__cards { margin-top: 0; }
  .case-studies__card { margin-bottom: 0; }
  .case-studies__testimonials { margin-top: 0; }
}
</style>

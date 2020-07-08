<template>
  <div class="case-studies c-bg1">
    <Hydrate ssr-only>
      <PageHeader
        class="case-studies__header"
        tag1="Case Studies"
        tag2="What We Do"
        :headline="`We execute ideas \nfrom design till launch.`" />
    </Hydrate>
    <Hydrate when-visible>
      <CaseStudyRiver />
    </Hydrate>
    <Hydrate when-visible>
      <ProjectsGrid class="c-bg2" />
    </Hydrate>
    <!-- <Hydrate when-visible>
      <OpenSource class="c-bg3" />
    </Hydrate> -->
    <Hydrate when-visible>
      <Testimonials :active="1" />
    </Hydrate>
    <Hydrate when-visible>
      <Footer />
    </Hydrate>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import PageHeader from '@/components/PageHeader'
import CaseStudyRiver from '@/components/CaseStudyRiver'
import ProjectsGrid from '@/components/ProjectsGrid'
import OpenSource from '@/components/OpenSource'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default {
  name: 'Studies',
  head () {
    return {
      title: 'Our Work - Loud Now Agency',
    }
  },
  transition: {
    name: 'trans-page-from-bottom',
    mode: 'in-out',
  },
  beforeRouteLeave (to, from, next) {
    this.$el.style.transform = `translateY(-${window.scrollY}px)`
    next()
  },
  components: {
    Hydrate,
    PageHeader,
    CaseStudyRiver,
    ProjectsGrid,
    OpenSource,
    Testimonials,
    Footer,
  },
}
</script>

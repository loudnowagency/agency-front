<template>
  <div class="c-bg1">
    <Hydrate ssr-only>
      <PageHeader
        layout="3"
        tag1="Approach"
        tag2="How We Do It"
        :headline="`No magic,\njust hard work.`">
        <PageIntro
          :leftCopy="[
            'We are production-focused.',
            'We are your Software Departament that works behind the scenes. We take the idea, iterate fast and secure project success. It\'s not done until it\'s done.',
          ]"
          :rightCopy="[
            'Don\'t let stressful production get in your way. We\'re good at it.',
            'By outsourcing you can release time and reinvest it into creative cycles and engagements. You\'re good at that.',
          ]" />
      </PageHeader>
    </Hydrate>
    <Hydrate ssr-only>
      <Process />
    </Hydrate>
    <Hydrate ssr-only>
      <FeatureList
        class="c-bg2"
        title="— Development"
        :items="[
          { headline: 'Frontend', copy: 'Pixel perfect design implementation, responsivness, micro-interactions that catch attention. We do fronts that sell.' },
          { headline: 'Backend', copy: 'Security for your data, optimized resources usage, boosted assets delivery. We do backs that last.' },
          { headline: 'Performance', copy: 'Snappy mobile and desktop experience, on time with first paint and interactivity. Page speed that leaves competitors behind.' },
          { headline: 'Accessibility', copy: 'Keyboard navigation, screen readers, content contrast and text scaling. Leave no clients behind.' },
          { headline: 'CMS Integrations', copy: 'Wordpress, Craft or something niche. Headless integration or backend templating. Content is king, our clients are emperors.' },
          { headline: 'Native Apps', copy: 'Vue Native or React Native. Common stack for common use. We can get native native if that\'s your goal.' },
        ]" />
    </Hydrate>
    <Hydrate when-visible>
      <Testimonials :active="0" />
    </Hydrate>
    <Hydrate when-visible>
      <Footer />
    </Hydrate>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import PageHeader from '@/components/PageHeader'
import PageIntro from '@/components/PageIntro'
import Process from '@/components/Process'
import FeatureList from '@/components/FeatureList'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default {
  name: 'Approach',
  head () {
    return {
      title: 'Approach - Loud Now Agency',
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
    PageHeader,
    PageIntro,
    Process,
    FeatureList,
    Testimonials,
    Footer,
    Hydrate,
  },
}
</script>

<style lang="scss" scoped>
/deep/ .page-header { max-height: 100vh !important;}
</style>

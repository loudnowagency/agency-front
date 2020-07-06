<template>
    <div class="services c-bg1">
      <Hydrate ssr-only>
        <PageHeader
          layout="2"
          tag1="Services"
          tag2="What We Offer"
          :headline="`We plan, build and deliver \ndigital experiences.`" />
      </Hydrate>
      <Hydrate ssr-only>
        <FeatureList
          title="— Development"
          :items="[
            { headline: 'Frontend', copy: 'Pixel perfect design implementation, responsiveness, micro-interactions that catch attention. We do fronts that sell.' },
            { headline: 'Backend', copy: 'Security for your data, optimized resources usage, boosted assets delivery. We do backs that last.' },
            { headline: 'Performance', copy: 'Snappy mobile and desktop experience, on time with the first paint and interactivity. Page speed that leaves competitors behind.' },
            { headline: 'Accessibility', copy: 'Keyboard navigation, screen readers, content contrast and text scaling. Leave no clients behind.' },
            { headline: 'CMS Integrations', copy: 'Wordpress, Craft or something niche. Headless integration or backend templating. Content is king, our clients are emperors.' },
            { headline: 'Native Apps', copy: 'Vue Native or React Native. Common stack for common use. We can get native native if that\'s your goal.' },
          ]" />
      </Hydrate>
      <Hydrate ssr-only>
        <FeatureList
          title="— Consulting"
          :items="[
            { headline: 'Architecture Planning', copy: 'We can help from brainstorming phase to keep your project on track and avoid production bottlenecks later on.' },
            { headline: 'Performance Review', copy: 'We may hunt and target existing performance issues. Your users don\'t want to wait and you shouldn\'t make them do.' },
            { headline: 'Accessibility Review', copy: 'You might be missing out business opportunities by leaving some of your audience behind. We can help you catch up with them.' },
          ]" />
      </Hydrate>
      <Hydrate when-visible>
        <Taas />
      </Hydrate>
      <Hydrate when-visible>
       <Footer />
      </Hydrate>
    </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import PageHeader from '@/components/PageHeader'
import FeatureList from '@/components/FeatureList'
import Taas from '@/components/Taas'
import Footer from '@/components/Footer'

export default {
  name: 'ServicesPage',
  head () {
    return {
      title: 'Services - Loud Now Agency',
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
    FeatureList,
    Taas,
    Footer,
    Hydrate,
  },
}
</script>

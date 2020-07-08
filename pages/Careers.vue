<template>
  <div class="careers c-bg1">
      <Hydrate ssr-only>
        <PageHeader
          class="careers__header"
          layout="3"
          tag1="Careers"
          tag2="Find your dream job "
          :headline="`Join our network and \nlevel up your career +`">
          <PageIntro
            :leftCopy="[
              'Loud Now Agency is all about partenrship. We find great clients and great developers and stick together to create great things.',
              'We are young and energetic shop that converts freedom into creativity.',
            ]"
            :rightCopy="[
              'Full Remote Company.',
              'We ditched offices before it was trendy. At Loud Now you can work from anywhere and enjoy your life.',
            ]" />
        </PageHeader>
      </Hydrate>
      <Hydrate ssr-only>
        <div class="container">
          <Picture :src="'/images/remote-work.jpg'" />
        </div>
      </Hydrate>
      <Hydrate ssr-only>
        <FeatureList
          title="— Culture"
          :items="[
            { headline: 'Remote', copy: 'We are remote first company and highly oriented on an async communication. We\'re very active on Slack and are always there to give you some help or a hug.' },
            { headline: 'Tech', copy: 'Our technology stack is in constant move. We love to experiment to refine our ListBoldes and tools. This is always a bit challenging and pushes us to learn and grow.' },
            { headline: 'Equal', copy: 'Our hierarchy is as flat as it can get. The company leadership are active senior developers doing their daily coding work along you. We care for everyone.' },
          ]" />
      </Hydrate>
      <Hydrate ssr-only>
        <PageHeader
          class="careers__slots"
          layout="2"
          tag1="We're hiring"
          tag2="Who are we looking for"
          :headline="`Current Slots`" />
      </Hydrate>
      <Hydrate when-visible>
        <ListBold
          tag1="Role"
          tag2="Description"
          :items="[
            {
              title: 'React <br>Developer',
              content: `
                <p>
                  We're currently looking for a talented React Developer to join an exciting blockchain project.
                  You will work closely with our client from Uinited States to develop frontend part of a blockchain based freelancers ecosystem.
                  There are already a blockchain and a react developer onboarded. Your role is envisioned as an export who will help to
                  establish the product's architecture, develop features and support growth.
                </p>
                <strong class=c-t1>About the job</strong>
                <ul>
                  <li>Full time position</li>
                  <li>Work from home</li>
                  <li>B2B</li>
                </ul>
                <strong class=c-t1>Requirements</strong>
                <ul>
                  <li>Comfortable with written and spoken english</li>
                  <li>2+ years of React commercial experience</li>
                  <li>You know multidev culture and tooling: Agile sprints, Git, QA, Code Reviews, CI etc.</li>
                </ul>
              `
            },
          ]" />
      </Hydrate>
      <Hydrate when-visible>
        <CTA
          class="careers__cta"
          title="Not Listed but talented?"
          copy="No worries. We'd like to meet you anyway and create opportunity to work together. Send us an email with some brief info about you, what you do and what are you looking for. We'll be happy to pick a converstaion."
          buttonText="Email Us" />
      </Hydrate>
      <Hydrate when-visible>
        <Footer />
      </Hydrate>
  </div>
</template>

<script>
import Hydrate from 'lazy-hydration'
import Picture from '@/components/ui/Picture'
import PageHeader from '@/components/PageHeader'
import PageIntro from '@/components/PageIntro'
import FeatureList from '@/components/FeatureList'
import ListBold from '@/components/ListBold'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default {
  name: 'CareersPage',
  components: {
    Hydrate,
    Picture,
    PageHeader,
    PageIntro,
    FeatureList,
    ListBold,
    CTA,
    Footer,
  },
  head () {
    return {
      title: 'Careers',
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
}
</script>

<style lang="scss" scoped>
.careers__header {
  height: auto !important;
  max-height: none !important;
  padding-top: 240px !important;
  padding-bottom: 120px !important;
}

.careers__slots {
  height: auto !important;
  max-height: none !important;
  padding-top: 0 !important;
}

.careers__cta {
  margin-bottom: 120px;
}
</style>

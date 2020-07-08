<template>
  <div class="taas c-bg2">
    <PageHeader
      class="taas__header"
      tag1="Team as a Service"
      tag2="What We Offer"
      :headline="`TAAS - On-Demand Development Services. Affordable.`" />
    <ColsIcon
      class="taas__cols"
      :items="[
        {
          icon: '/icons/abstract-1.svg',
          headline: 'Top Notch Code',
          copy: 'Our primary focus is web and performance delivery. We don’t build casual sites - we build experiences',
          shape: 'rectangle',
        }, {
          icon: '/icons/abstract-2.svg',
          headline: 'Seamless Team Integration',
          copy: 'We’re a highly effective remote team that understands difficulties deriving from distance. We are result-oriented and very transparent',
          shape: 'triangle',
        }, {
          icon: '/icons/abstract-3.svg',
          headline: 'Daily Delivery And Communication',
          copy: 'Daily code delivery, communication and reporting will make you feel comfortable working with us. We earn trust through hard work',
          shape: 'circle',
        },
      ]" />
    <CTA
      class="taas__cta"
      title="No time to hire?"
      copy="Have you ever missed a deadline, turned down a client due to lack of development resources or got lost in workload? We're here to help. Our studio plays supporting role in digital projects' planing, execution and delivery."
      buttonText="Work With Us" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ColsIcon from '@/components/ColsIcon'
import CTA from '@/components/CTA'

export default {
  name: 'Taas',
  components: {
    PageHeader,
    ColsIcon,
    CTA,
  }
}
</script>

<style lang="scss" scoped>
/deep/ .page-header { height: auto !important; padding-top: 0 !important;}
.taas { padding: 120px 0; }
.taas__cols { margin-top: 120px; }
.taas__cta { margin-top: 120px; }

@media(max-width: 1024px) {
  /deep/ .page-header { height: auto !important; }
  .taas { padding: 80px 0; }
  .taas__cols { margin-top: 75px; }
}
</style>

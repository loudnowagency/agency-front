<template>
  <div class="section">
    <div class="bg c-bg2"></div>
      <PageHeader
        class="home__header"
        tag1="Team as a Service"
        tag2="What We Offer"
        :headline="`TAAS - On-Demand Development Services. Affordable.`" />
      <ColsIcon
        class="home__cols"
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
      <SideImgCopy
        class="home__side-img-copy" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ColsIcon from '@/components/ColsIcon'
import SideImgCopy from '@/components/SideImgCopy'

export default {
  name: 'Taas',
  components: {
    PageHeader,
    ColsIcon,
    SideImgCopy,
  }
}
</script>

<style lang="scss" scoped>
/deep/ .page-header { height: auto !important; }
.home__header        { padding-top: 150px; }
.home__cols          { padding-top: 150px; }
.home__side-img-copy { padding-top: 200px; padding-bottom: 150px; }

.section {
  z-index: 0;
  position: relative;
}

.bg {
  z-index: -1;
  position: absolute;
  top: 280px;
  left: 0;
  width: 100%;
  height: calc(100% - 280px);
}

@media(max-width: 1024px) {
  /deep/ .page-header { height: auto !important; }
  .home__cols { padding-top: 75px; }
  .home__side-img-copy { padding-top: 100px; padding-bottom: 50px; }
}
</style>

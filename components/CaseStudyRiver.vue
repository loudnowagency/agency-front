<template>
  <div class="case-study-river">
    <nuxt-link
      class="case-study-river__item"
      v-for="(item, i) in [
        {
          bg: 'case-study-rs.jpg',
          clientName: 'XWP',
          projectLogo: '/logos/rolling-stone.svg',
          title: 'Louder Front For Rolling Stone',
          buttonText: 'See What We Did',
          link: '/studies/rolling-stone'
        },
        {
          bg: 'case-study-jupiter.jpg',
          clientName: 'Artbees',
          projectLogo: '/logos/jupiter.svg',
          title: 'Top Selling WordPress Theme',
          buttonText: 'See What We Did',
          link: '/studies/jupiter'
        },
      ]"
      :to="item.link"
      :key="`home__study-card-${i}`">
        <CaseStudyCard v-bind="item" />
    </nuxt-link>
  </div>
</template>

<script>
import CaseStudyCard from '@/components/CaseStudyCard'

export default {
  name: 'CaseStudyRiver',
  components: { CaseStudyCard },
}
</script>

<style lang="scss" scoped>
.case-study-river {
  padding: 120px 0;
}

.case-study-river__item {
  display: block;
  & + & { margin-top: 50px; }
}
</style>

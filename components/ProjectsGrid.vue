<template>
  <div class="projects-list">
    <div class="container">
      <div class="projects-list__grid grid">
        <div class="projects-list__title">
          <span>{}</span>
          <span class="c-t2">Building Products Used By Milions</span>
        </div>
        <Logo
          v-for="(item, i) in [
            { logo: '/logos/ampized.svg', client: 'XWP', height: 45, },
            { logo: '/logos/caulfield.svg', client: 'XWP', height: 65, },
            { logo: '/logos/cvr.svg', client: 'Digital Surgeons', height: 45, },
            { logo: '/logos/freshpet.svg', client: 'Digital Surgeons', height: 45, },
            { logo: '/logos/lovesac.svg', client: 'Digital Surgeons', height: 30, },
            { logo: '/logos/launch.svg', client: 'Digital Surgeons', height: 30, },
            { logo: '/logos/newman.svg', client: 'Digital Surgeons', height: 30, },
            { logo: '/logos/nova.svg', client: 'XWP', height: 40, },
            { logo: '/logos/wolf-gordon.svg', client: 'Digital Surgeons', height: 25, },
            { logo: '/logos/xhq.svg', client: 'XWP', height: 40, },
          ]"
          class="projects-list__item"
          :key="`projects-list__item-${i}`"
          :src="item.logo"
          :height="item.height"
          :meta="`Client: ${item.client}`"
          />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/ui/Logo'

export default {
  name: 'ProjectsGrid',
  components: { Logo },
}
</script>

<style lang="scss" scoped>
.projects-list {
  padding: 120px 0;
}

.projects-list__grid {
  align-items: flex-end;
}

.projects-list__title {
  width: 100%;
  margin-bottom: 50px;
  font-family: $font-tech;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.projects-list__item {
  width: 25%;
  margin-top: 70px;
}

@media (max-width: 1024px) {
  .projects-list {
    padding: 80px 0;
  }

  .projects-list__title {
    font-size: 12px;
  }

  .projects-list__item {
    width: 50%;
  }
}
</style>

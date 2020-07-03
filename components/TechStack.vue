<template>
  <div class="tech-stack c-bg3">
    <div class="container">
      <div class="tech-stack__grid grid">
        <div class="tech-stack__icons-wrap">
          <div class="tech-stack__icons grid">
            <div
              v-for="(icon, i) in ['vue', 'react', 'apollo', 'graphql', 'wordpress', 'laravel', 'craft', '']"
              :key="`services-icon-${icon}`"
              class="tech-stack__icon c-bg3"
              :hideCorners="true">
              <div class="tech-stack__icon-border c-border"></div>
              <InlineSvg
                v-if="icon"
                :src="`/icons/${icon}.svg`" />
              <Shape
                v-if="selected.includes(i)"
                class="tech-stack__shape"
                type="circle" />
            </div>
            <InlineSvg
              class="tech-stack__connector"
              :src="`/images/connector.svg`" />
          </div>
        </div>

        <div class="tech-stack__body">
          <div class="tag">
            <strong> Tech Stack </strong> <br />
            <span class="c-t2"> Adaptable </span>
          </div>
          <h3 class="tech-stack__headline">
            We cover you
          </h3>
          <p class="tech-stack__copy c-t2">
            We build and deploy development teams to meet your project needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Shape from '@/components/ui/Shape'

export default {
  name: 'TechStack',
  components: {
    Shape,
    InlineSvg,
  },
  data () {
    return {
      selected: [0, 6],
    }
  },
}
</script>

<style lang="scss" scoped>
.tech-stack {
  padding-top: 200px;
  padding-bottom: 200px;
}

.tech-stack__grid { align-items: center; }

.tech-stack__icons-wrap {
  width: col(7);
}

.tech-stack__icons {
  position: relative;
}

.tech-stack__icon {
  position: relative;
  width: col(3);

  &::before {
    content: '';
    display: block;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 35%;
    transform: translate(-50%, -50%);
  }
}

.tech-stack__icon-border {
  position: absolute;
  z-index: 1;
  top: -1px;
  left: -1px;
  height: calc(100% + 1px);
  width: calc(100% + 1px);
  border-style: solid;
  border-width: 1px;
}

.tech-stack__shape {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
}

.tech-stack__connector {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 100%;
  transform: translate(-5px, -5px);
}

.tech-stack__body {
  width: col(4);
  margin-left: push(1);
}

.tech-stack__headline {
  margin-top: 60px;
  white-space: nowrap;
}

.tech-stack__copy {
  margin-top: 20px;
  padding-right: push(1);
}

.tag {
  font-family: $font-tech;

  strong,
  span {
    display: inline-block;
  }
}

@media(max-width: 1024px) {
  .tech-stack {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .tech-stack__icons-wrap {
    width: col(12);
  }

  .tech-stack__shape {
    bottom: 10%;
    transform: translateX(-50%) scale(.5);
  }

  .tech-stack__connector { display: none; }

  .tech-stack__body {
    width: col(12);
    margin-left: 0;
    margin-top: 50px;
  }

  .tech-stack__headline {
    margin-top: 50px;
  }
}
</style>

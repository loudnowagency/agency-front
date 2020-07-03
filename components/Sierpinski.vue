<template>
  <div class="sierpinski">
    <div class="sierpinski__ratio"></div>
    <canvas></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { easing, tween, keyframes } from 'popmotion'
import styler from 'stylefire'
import Sierpinski from '@/visuals/sierpinski'

export default {
  name: 'Sierpinski',

  mounted () {
    this.startSierpinski()
  },

  computed: {
    ...mapState('ui', ['theme'])
  },

  methods: {
    async startSierpinski() {
      const canvas = this.$el.querySelector('canvas')
      const sierpinski = new Sierpinski()

      let twistAnimation
      let prevScrollingDown
      let prevScrollY = scrollY
      let position = .5

      const animateSierpinski = async (config) => {
        return new Promise(resolve => {
          if (twistAnimation) twistAnimation.stop()
          if (!config.from) config.from = position
          twistAnimation = tween({
            ease: easing.easeInOut,
            ...config
          })
          .pipe(v => parseFloat(v.toFixed(6)))
          .start({
            update: p => {
              position = p
              sierpinski.draw(p)
            },
            complete: resolve,
          })
        })
      }

      const sierpinskiTimeline = async () => {
        await animateSierpinski({ to: .6, duration: 5000 })
        await animateSierpinski({ to: .7, duration: 3000 })
        sierpinskiTimeline()
      }

      sierpinski.init({
        el: canvas,
        color: this.theme === 'light'
          ? '#000000'
          : '#ffffff'
      })

      sierpinski.draw(position)
      await animateSierpinski({ to: .72, duration: 1500, })
      sierpinskiTimeline()

      twistAnimation.pause()

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting)  twistAnimation.resume()
          else twistAnimation.pause()
        }
      )
      observer.observe(canvas)
    },
  },
}
</script>

<style lang="scss" scoped>
  .sierpinski {
    position: relative;
    width: 100%;
  }

  .sierpinski__ratio {
    height: 0;
    padding-bottom: 85%;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

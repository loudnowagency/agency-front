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

  data () {
    return {
      twistAnim: null,
      sierpinski: null,
      canvas: null,
      position: .5,
    }
  },

  async mounted () {
    this.canvas = this.$el.querySelector('canvas')
    this.sierpinski = new Sierpinski()
    await this.initAnim()
    this.throttleAnim()
  },

  computed: {
    ...mapState('ui', ['theme'])
  },

  methods: {
    async initAnim () {
      this.sierpinski.init({
        el: this.canvas,
        color: this.theme === 'light' ? '#000000' : '#ffffff',
      })
      this.sierpinski.draw(this.position)
      await this.animateSierpinski({ to: .72, duration: 1500, })
      this.twistAnimLoop()
    },

    async animateSierpinski (config) {
      return new Promise(resolve => {
        if (this.twistAnim) this.twistAnim.stop()
        if (!config.from) config.from = this.position
        this.twistAnim = tween({
          ease: easing.easeInOut,
          ...config
        })
        .pipe(v => parseFloat(v.toFixed(6)))
        .start({
          update: p => {
            this.position = p
            this.sierpinski.draw(p)
          },
          complete: resolve,
        })
      })
    },

    async twistAnimLoop () {
      await this.animateSierpinski({ to: .6, duration: 5000 })
      await this.animateSierpinski({ to: .7, duration: 3000 })
      this.twistAnimLoop()
    },

    throttleAnim () {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting)  this.twistAnim.resume()
          else this.twistAnim.pause()
        }
      )
      this.twistAnim.pause()
      observer.observe(this.canvas)
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

  @media (max-width: 1024px) {
    .sierpinski { display: none; }
  }
</style>

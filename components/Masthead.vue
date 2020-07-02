<template>
  <div class="masthead section c-bg1">
    <div class="masthead__container container">
      <div class="masthead__text">
        <h1
          class="masthead__headline">
          Software<br/>
          Studio
        </h1>
        <p
          class="masthead__copy">
          We help forward-thinking companies
          build digital experiences.
        </p>
        <a
          class="masthead__button"
          href="mailto:hi@loudnow.agency">
          <Button>Work With Us</Button>
        </a>
      </div>
      <div class="masthead__visuals">
        <div
          class="masthead__visuals-box">
          <canvas v-scrollanim="scrollanim"></canvas>
          <svg class="frame" width="597" height="519" viewBox="0 0 597 519" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M596 516.5L298.5 2.5L1 517.5L596 516.5Z" stroke="currentColor" stroke-opacity="0.1"/>
            <path d="M330 1H326V5H330V1Z" stroke="currentColor" stroke-opacity="0.2" />
            <path d="M326 3H301" stroke="currentColor" stroke-opacity="0.2" />
            <path d="M300 2H298V4H300V2Z" stroke="currentColor" stroke-width="3" stroke-opacity="0.2" />
            <g class="row row-1">
              <path d="M342 2H345" stroke="currentColor" stroke-opacity="0.2" />
              <path d="M347 2H352" stroke="currentColor" stroke-opacity="0.2" />
              <path d="M354 2H365" stroke="currentColor" stroke-opacity="0.2" />
              <path d="M366 2H378" stroke="currentColor" stroke-opacity="0.2" />
              <path d="M379 2H392" stroke="currentColor" stroke-opacity="0.2" />
              <path d="M394 2L397 2" stroke="currentColor" stroke-opacity="0.2" />
            </g>
            <g class="row row-2">
              <path d="M342 4H349" stroke="currentColor" stroke-opacity="0.2" />
              <path d="M351 4H361" stroke="currentColor" stroke-opacity="0.2" />
              <path d="M363 4H379" stroke="currentColor" stroke-opacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { easing, tween, keyframes } from 'popmotion'
import styler from 'stylefire'
import Button from '@/components/ui/Button'
import Sierpinski from '@/visuals/sierpinski'

export default {
  name: 'Masthead',

  components: { Button },

  mounted () {
    // this.startSierpinski()
    // this.startFrame()
  },

  data () {
    return {
      scrollanim: {
        name: 'trans-el-from-bottom-fade',
        delay: this.delay || 200,
        stagger: true,
      },
    }
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
        await animateSierpinski({ to: .6 + (.12 * Math.random()), duration: 1500 + 1500 * Math.random(), })
        sierpinskiTimeline()
      }

      const floatAnimation = tween({
        ease: easing.easeInOut,
        duration: 2000,
        from: 50,
        to: 40,
        flip: Infinity,
      }).start(v => canvas.style.transform = `translateY(${v}px)`)

      sierpinski.init({
        el: canvas,
        color: this.theme === 'light'
          ? '#000000'
          : '#ffffff'
      })

      sierpinski.draw(position)
      await animateSierpinski({ to: .67, duration: 2000, })
      sierpinskiTimeline()

      twistAnimation.pause()
      floatAnimation.pause()

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            twistAnimation.resume()
            floatAnimation.resume()
          } else {
            twistAnimation.pause()
            floatAnimation.pause()
          }
        }
      )
      observer.observe(canvas)
    },

    async startFrame() {
      const canvas = this.$el.querySelector('canvas')
      const paths = this.$el.querySelectorAll('.frame path')
      const textPaths = [...paths].filter((el, i) => i >= 4)
      const wait = t => new Promise(res => setTimeout(res, t))
      let textAnims = []

      const asyncTween = (config, update, i) => {
        return new Promise(complete => {
          textAnims[i] = tween(config).start({ update, complete })
        })
      }

      const textAnim = async (path, i) => {
        await wait(50 * Math.random() * i)
        await asyncTween({ from: 0, to: 1, duration: 300 }, v => styler(path).set({ pathLength: v }), i)
        styler(path).set({ rotate: '180deg' })
        await wait(3000)
        await asyncTween({ from: 1, to: 0, duration: 400 }, v => styler(path).set({ pathLength: v }), i)
        styler(path).set({ rotate: '0deg' })
        textAnim(path, i)
      }

      textPaths.forEach(path => styler(path).set({ pathLength: 0 }))
      textPaths.map(textAnim)

      textAnims.forEach(a => a.pause())

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) textAnims.forEach(a => a.resume())
          else textAnims.forEach(a => a.pause())

        }
      )
      observer.observe(canvas)
    },
  },
}
</script>

<style lang="scss">
.masthead {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  max-height: 1100px;
  padding-top: 100px;
  padding-bottom: 50px;
}

.masthead__container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
}

.masthead__text {
  flex-shrink: 0;
  width: col(6);
}

.masthead__visuals {
  pointer-events: none;
  position: relative;
  width: col(6);
}

.masthead__visuals-box {
  position: absolute;
  top: 50%;
  left: 0;
  width: 640px;
  height: 565px;
  transform: translateY(-50%);

  svg {
    width: 100%;
    height: auto;
    transform: translateY(-5%);
  }

  canvas {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.masthead__headline {
  font-size: 170px;
  line-height: .85;

  @media(max-width: 1280px) {
    font-size: 150px;
  }
}

.masthead__copy {
  font-family: $font-tech;
  max-width: 350px;
  margin-top: 30px;
}

.masthead__button {
  display: inline-block;
  margin-top: 70px;
}

@media(max-width: 1024px) {
  .masthead {
    padding-top: 12vh;
    padding-bottom: 12vh;
    max-height: 850px;
  }

  .masthead__text {
    width: col(12);
  }

  .masthead__visuals {
    position: static;
  }

  .masthead__visuals-box {
    transform: translateY(50px) translateX(0);
    top: auto;
    right: 30px;
    left: auto;
    bottom: 50px;
    width: 480px;
    height: 425px;
    svg { display: none; }
  }

  .masthead__headline {
    font-size: 80px;
  }

  .masthead__copy {
    font-size: 12px;
    max-width: 50%;
  }

  .masthead__button {
    margin-top: 40px;
  }
}


@media(max-width: 540px) {
  .masthead__visuals-box {
    right: auto;
    left: 30px;
  }
}
</style>

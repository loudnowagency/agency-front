<template>
  <div class="code-editor-wrap">
    <Sierpinski
      v-if="showSierpinski"
      class="code-editor-sierpinski" />
    <div class="code-editor c-bg3">
      <div class="code-editor__bar">
        <div class="code-editor__dot -i1"></div>
        <div class="code-editor__dot -i2"></div>
        <div class="code-editor__dot -i3"></div>
      </div>
      <div class="code-editor__separator c-bg1"></div>
      <pre class="code-editor__body">
<i c1>const</i> <i c2>draw</i> <i c3>=</i> (p0, p1, p2, r) <i c1>=></i> {
  ctx.<i c2>beginPath</i>()
  ctx.<i c2>rotate</i>(r)
  ctx.<i c2>moveTo</i>(p0.x, p0.y)
  ctx.<i c2>lineTo</i>(p1.x, p1.y)
  ctx.<i c2>lineTo</i>(p2.x, p2.y)
  ctx.<i c2>fillStyle</i> <i c3>=</i> color
  ctx.<i c2>fill</i>()
}

<i c3>export default {</i>
  init,
  draw,
  update
<i c3>}</i>
      </pre>
      <div class="c-bg1"></div>
      <pre class="code-editor__terminal">
<span>></span> <span>sierpinski.init()</span>
<span>> sierpinski.draw(progress)</span>
      </pre>
    </div>

  </div>
</template>

<script>
import Sierpinski from '@/components/Sierpinski'

export default {
  name: 'CodeEditor',
  components: { Sierpinski },
  data () {
    return {
      showSierpinski: false,
    }
  },
  mounted () {
    setTimeout(() => {
      this.showSierpinski = true
    }, 3000)
  },
}
</script>

<style lang="scss" scoped>
i { font-style: normal; }
[c1] { color: #D288F5; }
[c2] { color: #78A3E3; }
[c3] { color: #4DBED7; }

.code-editor-wrap {
  position: relative;
}

.code-editor-sierpinski {
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateY(-50px);
  width: 70%;
  opacity: 0;
  animation: sierp 1.5s forwards $ease;
}

.code-editor {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 395px;
  width: 100%;
  font-family: $font-tech;
  font-size: 10px;
  line-height: 13px;
  transform-origin: top center;
  animation: scale 1.5s forwards 3s $ease;
}

.code-editor__bar {
  display: flex;
  align-items: center;
  padding: 12px;
}

.code-editor__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;

  &.-i1 { background-color: #FF5A52; }
  &.-i2 { background-color: #E6C02A; }
  &.-i3 { background-color: #53C22B; }
}

.code-editor__separator {
  height: 1px;
}

.code-editor__body {
  flex-grow: 1;
  padding: 20px 44px;
}

.code-editor__terminal {
  padding: 20px 44px;

  span { overflow: hidden; display: inline-block; }

  span:nth-of-type(2) { width: 0; animation: typing 1s forwards 1s; }
  span:nth-of-type(3) { width: 0; animation: typing 1s forwards 2s;}
}

@keyframes typing {
  0%    { width: 0;    } 10% { width: 0; }
  10.1% { width: 7px;  } 20% { width: 7px; }
  20.1% { width: 20px; } 30% { width: 20px; }
  30.1% { width: 30px; } 40% { width: 30px; }
  40.1% { width: 40px; } 50% { width: 40px; }
  50.1% { width: 50px; } 60% { width: 50px; }
  60.1% { width: 60px; } 70% { width: 60px; }
  70.1% { width: 90px; } 80% { width: 90px; }
  80.1% { width: 120px; } 90% { width: 120px; }
  90.1% { width: 140px; } 99.9% { width: 140px; }
  100% { width: 180px; }
}

@keyframes scale {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(.95); opacity: .5; }
}

@keyframes sierp {
  0% { display: block; }
  1% { transform: translateY(-50%) translateY(-50px) scale(.7); opacity: 0; }
  100% { transform: translateY(-50%) translateY(-50px) scale(1); opacity: 1; }
}
</style>

import Vue from 'vue'

let observer

if (process.client) {
  observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter(e => e.isIntersecting)
        .forEach((entry, i) => {
          const el = entry.target
          const delay = el._opts.stagger ? el._opts.delay * (i + 1) : el._opts.delay
          setTimeout(() => {
            entry.target.classList.add(`${el._opts.name}-enter`)
          }, delay)
          unbind(el)
        })
    }
  )
}

function inserted(el, binding) {
  const { name = 'scrollanim', delay = 0, stagger = false } = binding.value
  el._observe = { init: false, observer }
  el._opts = { name, delay, stagger }
  el.classList.add(name)
  el.classList.add(`${name}-before`)
  observer.observe(el)
}

function unbind(el) {
  if (!el._observe) return
  el._observe.observer.unobserve(el)
  delete el._observe
}

Vue.directive('scrollanim', {
  inserted,
  unbind,
})

export default () => {
  let a = 0
  let b = 0
  let r = 0
  let tx
  let ty
  let width
  let height
  let canvas
  let color
  let ctx
  let p0
  let p1
  let p2

  const drawTriangle = (p0, p1, p2, r) => {
    ctx.beginPath()
    ctx.setTransform(.7, 0, 0, .7, width/2, height/2)
    ctx.rotate(r)
    ctx.moveTo(p0.x, p0.y)
    ctx.lineTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fillStyle = color
    ctx.fill()
  }

  const sierpinski = (p0, p1, p2, r, limit) => {
    if (limit > 0) {
      const pA = {
        x: p0.x + (p1.x - p0.x) * tx,
        y: p0.y + (p1.y - p0.y) * ty
      }
      const pB = {
        x: p1.x + (p2.x - p1.x) * tx,
        y: p1.y + (p2.y - p1.y) * ty
      }
      const pC = {
        x: p2.x + (p0.x - p2.x) * tx,
        y: p2.y + (p0.y - p2.y) * ty
      }
      sierpinski(p0, pA, pC, r, limit - 1)
      sierpinski(pA, p1, pB, r, limit - 1)
      sierpinski(pC, pB, p2, r, limit - 1)
    } else {
      drawTriangle(p0, p1, p2, r)
    }
  }

  const progressCache = {}
  const draw = progress => {
    if (progress < 0.025) return
    a = progress - 0.5
    b = -a * 2
    r = (progress * 2) - 1
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.translate(width / 2, height / 2)
    // if (!progressCache[progress.toString()]) {
      tx = 0.5 + Math.sin(a) * 0.25
      ty = 0.5 + Math.sin(b) * 0.5
      sierpinski(p0, p1, p2, r, 7)
      // progressCache[progress.toString()] = ctx.getImageData(0, 0, width, height)
    // } else {
      // ctx.putImageData(progressCache[progress.toString()], 0, 0)
    // }
    ctx.restore()
  }

  const update = () => {
    const rect = canvas.getBoundingClientRect()
    width = canvas.width = rect.width
    height = canvas.height = rect.height

    p0 = {
      x: 0,
      y: -height/2
    }
    p1 = {
      x: width/2,
      y: height/2
    }
    p2 = {
      x: -width/2,
      y: height/2
    }
  }

  const init = config => {
    canvas = config.el
    color = config.color
    ctx = canvas.getContext("2d")
    update()
  }

  return {
    init,
    draw,
    update
  }
}


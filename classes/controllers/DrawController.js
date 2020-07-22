import gsap from 'gsap'
import config from '~/utils/config'
import d2r from '~/utils/d2r'

export default class DrawController {
  constructor({ canvas, ctx, gui }) {
    this.canvas = canvas
    this.ctx = ctx
    this.data = {
      clippingMask: {
        size: {
          width: this.canvas.width * 2,
          height: this.canvas.height * 2,
        },
        position: {
          x: -this.canvas.width / 2,
          y: 2.51 * this.canvas.height, //from AE file
        },
        rotation: -26,
      },
      images: {
        test: {
          path: '/assets/images/test',
          filenames: [''],
          images: [], //added after load
        },
      },
    }
    this._addGUI(gui)
  }

  _addGUI = (gui) => {
    gui.addParam({
      object: this.data.clippingMask.position,
      prop: 'x',
      fromTo: [0, this.canvas.width],
      step: 100,
      name: 'Canvas mask X',
      listen: true,
    })
    gui.addParam({
      object: this.data.clippingMask.position,
      prop: 'y',
      fromTo: [0, this.canvas.width],
      step: 100,
      name: 'Canvas mask Y',
      listen: true,
    })
  }

  loadImages = (data) => {
    for (let i = 0; i < data.filenames.length; i++) {
      let url = `${data.path}${data.filenames[i]}`

      let img
      img = new Image()
      img.src = url

      img.addEventListener('load', (e) => {
        data.images.push(img)
        if (config.devMode) console.log(img)
      })
    }
  }

  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    //draw bg rect
    this.ctx.fillStyle = 'rgba(0,0,0,1)'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.ctx.save()
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2)
    this.ctx.rotate(d2r(this.data.clippingMask.rotation))

    //draw clipping mask
    this.ctx.fillStyle = '#fff'
    this.ctx.beginPath()
    this.ctx.rect(
      this.data.clippingMask.position.x,
      this.data.clippingMask.position.y,
      this.data.clippingMask.size.width,
      this.data.clippingMask.size.height
    )
    this.ctx.clip()
    this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2)

    //draw something inside mask
    const grad = this.ctx.createLinearGradient(0, -75, 0, 75)
    grad.addColorStop(0, '#232256')
    grad.addColorStop(1, '#143778')
    this.ctx.fillStyle = grad
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    //reset
    this.ctx.setTransform(1, 0, 0, 1, 0, 0)
    this.ctx.restore()
  }

  startMovingClippingMask = () => {
    if (config.devMode) console.log('start tweening')
    gsap.to(this.data.clippingMask.position, {
      y: -500,
      duration: 1,
    })
    gsap.to(this.data.clippingMask, {
      rotation: 13.4,
      duration: 1,
    })
  }
}

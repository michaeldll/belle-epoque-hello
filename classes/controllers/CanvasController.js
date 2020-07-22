import gsap from 'gsap'
import DrawController from '~/classes/controllers/DrawController'

export default class CanvasController {
  constructor({ width, height, id, gui }) {
    this.width = width
    this.height = height
    this.id = id
    this.gui = gui

    this.canvas = null
    // this.timeStamp = performance.now()
    this.ctx = null

    this.DrawController = null
  }

  init = () => {
    this.canvas = document.getElementById(this.id)
    if (this.canvas && this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')

      this._resize()
      this._addEventListeners()

      this.DrawController = new DrawController({
        canvas: this.canvas,
        ctx: this.ctx,
        gui: this.gui,
      })
      this.DrawController.draw()

      gsap.ticker.add(this._update)
    }
  }

  animate = () => {
    if (!this.DrawController) return
    this.DrawController.startMovingClippingMask()
  }

  _update = () => {
    if (!this.DrawController) return
    this.DrawController.draw()
  }

  _resize = () => {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  _addEventListeners = () => {
    window.addEventListener('resize', this.resize)
  }
}

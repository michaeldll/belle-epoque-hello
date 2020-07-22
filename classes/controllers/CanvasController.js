import DrawController from '~/classes/controllers/DrawController'

export default class CanvasController {
  constructor({ width, height }) {
    this.width = width
    this.height = height

    this.canvas = null
    this.ctx = null

    this.DrawController = null
  }

  init = () => {
    this.canvas = document.getElementById('bg-anim')
    if (this.canvas && this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')
      this.resize()
      this.DrawController = new DrawController({
        ctx: this.ctx,
      })
      this.DrawController.loadImages()
      this.DrawController.draw()
    }
  }

  resize = () => {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  addEventListeners = () => {
    window.addEventListener('resize', this.resize)
  }
}

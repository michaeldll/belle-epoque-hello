export default class DrawController {
  constructor({ ctx }) {
    this.ctx = ctx
    this.data = {
      images: {
        test: {
          path: '~/assets/images/test',
          filenames: [''],
          images: [], //added after load
        },
      },
    }
  }

  loadImages = () => {
    const data = this.data.shapes.orange

    for (let i = 0; i < data.filenames.length; i++) {
      let url = `${data.path}${data.filenames[i]}`

      let img
      img = new Image()
      img.src = url

      img.addEventListener('load', (e) => {
        data.images.push(img)
        console.log(img)
      })
      img.addEventListener('error', (e) => {
        console.log(new Error(`Failed to load image. URL: ${url}`))
      })
    }
  }

  draw = () => {
    this.ctx.fillStyle = '#ccc'
    this.ctx.fillRect(0, 0, 100, 100)
  }
}

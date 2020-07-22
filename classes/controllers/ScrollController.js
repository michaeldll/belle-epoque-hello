export default class ScrollController {
  constructor({ isMobile = false, timeout = 150 }) {
    this.isMobile = isMobile
    this.timeout = timeout

    this.timer = null
    this.wheelFlag = true
    this.scrollIndex = 0
    this.maxIndex = 2
    this.active = false
    this.startTouchY = 0
  }

  toggle = (mode) => {
    mode ? (this.active = true) : (this.active = false)
  }

  init = () => {
    if (this.isMobile) {
      window.addEventListener('touchstart', this.onTouchStart)
      window.addEventListener('touchend', this.onTouchEnd)
    } else {
      window.addEventListener('wheel', this.onWheel)
    }
  }

  onWheel = (e) => {
    if (!this.active) return
    if (this.timer !== null) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.wheelFlag = true
    }, this.timeout)

    if (this.wheelFlag) {
      this.wheelFlag = false
      if (e.wheelDelta < 0) this.scrollIndex++
      if (e.wheelDelta > 0) this.scrollIndex--

      if (this.scrollIndex > this.maxIndex) this.scrollIndex = 0
      if (this.scrollIndex <= 0) this.scrollIndex = 0

      window.EM.emit('customScroll', this.scrollIndex)
    }
  }

  onTouchStart = (e) => {
    this.startTouchY = e.touches[0].clientY
  }

  onTouchEnd = (e) => {
    var curentTouchY = e.changedTouches[0].clientY
    if (this.startTouchY > curentTouchY + 5) {
      this.scrollIndex++
    } else if (this.startTouchY < curentTouchY - 5) {
      this.scrollIndex--
    }
    if (this.scrollIndex >= this.maxIndex) this.scrollIndex = this.maxIndex
    if (this.scrollIndex <= 0) this.scrollIndex = 0

    window.EM.emit('customScroll', this.scrollIndex)
  }
}

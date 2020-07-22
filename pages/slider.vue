<template>
  <Container id="slider-page">
    <div v-if="devMode" class="debug">
      <Button class="my-1" @click="onAnimateCanvas">onAnimateCanvas</Button>
    </div>
    <!-- <TransitionClip /> -->
    <Canvas class="vw-100 vh-100" id="bg-canvas" />
    <section class="slider">
      <article class="slide vw-100 vh-100 show">
        <h2>this is slide 1</h2>
      </article>

      <article class="slide vw-100 vh-100">
        <h2>this is slide 2</h2>
      </article>

      <article class="slide vw-100 vh-100">
        <h2>this is slide 3</h2>
      </article>
    </section>
  </Container>
</template>

<script>
import config from '~/utils/config'
import CanvasController from '~/classes/controllers/CanvasController'
import ScrollController from '~/classes/controllers/ScrollController'
import GUIManager from '~/classes/managers/GUIManager'

let canvasController = null

export default {
  data: function () {
    return { devMode: config.devMode.enabled }
  },
  mounted: function () {
    //init GUI
    const gui = new GUIManager(this.DAT)

    //init custom event emitter
    window.EM = new this.eventEmitter()
    window.EM.on('customScroll', (scrollIndex) => {
      if (config.devMode) console.log(scrollIndex)
      this.goToSlide(scrollIndex)
    })

    //init custom scroll controller
    const scrollController = new ScrollController({
      isMobile: false,
      timeout: 100,
    })
    scrollController.toggle(true)
    scrollController.init()

    //init custom canvas controller
    canvasController = new CanvasController({
      width: window.innerWidth,
      height: window.innerHeight,
      id: 'bg-canvas',
      gui: gui,
    })
    canvasController.init()
  },
  methods: {
    //adds classes to the appropriate slide element
    goToSlide: function (slideIndex) {
      const slideElements = document.querySelectorAll('.slider > .slide')
      slideElements.forEach((slide, i) => {
        if (slide)
          i === slideIndex
            ? slide.classList.add('show')
            : slide.classList.remove('show')
      })
    },
    //adds classes to the appropriate transition clip element
    toggleTransition: function (index) {
      const transitionClipElements = document.querySelectorAll(
        '.transition-clip'
      )
      transitionClipElements.forEach((clip, i) => {
        if (clip)
          if (i === index) {
            clip.classList.toggle('in')
          }
      })
    },
    //animates canvas
    onAnimateCanvas: function (e) {
      canvasController.animate()
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/scss/utilities/_variables';

.debug {
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translate(0, -25%);
  z-index: 3;
}

.slider {
  .slide {
    position: absolute;
    opacity: 0;
    &:nth-of-type(1) {
      z-index: 0;
    }
    &:nth-of-type(2) {
      z-index: 1;
    }
    &:nth-of-type(3) {
      z-index: 2;
    }
    &.show {
      opacity: 1;
    }
  }
}
</style>

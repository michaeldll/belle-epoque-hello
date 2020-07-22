<template>
  <Container id="slider-page">
    <div v-if="devMode" class="debug">
      <!-- <Button class="my-1" @click="onAnimateCanvas">onAnimateCanvas</Button> -->
    </div>
    <!-- <TransitionClip /> -->
    <!-- <Canvas class="vw-100 vh-100" id="bg-canvas" /> -->
    <section class="slider">
      <article class="slider__slide vw-100 vh-100 show">
        <div class="top-left slider__slide__title">
          <h1>Front Dev.</h1>
        </div>
        <div class="top-right slider__slide__number">
          <h2>Nº001</h2>
        </div>
        <div class="bottom-left slider__slide__exercice">
          <h2>Exercice</h2>
        </div>
        <div class="bottom-right slider__slide__scroll">
          <p class="scroll">Scroll to begin</p>
        </div>
        <img
          src="/images/optimized/Photo_home.jpg"
          alt="Portrait femme page d'accueil / Portrait of a woman, homepage"
          class="slider__slide__image"
        />
      </article>

      <article
        class="slider__slide vw-100 vh-100 d-flex justify-content-center align-items-center"
      >
        <h2 class="slider__slide__title">Monday</h2>
        <img
          src="/images/optimized/Portrait_1.jpg"
          alt="Portrait femme, deuxieme page / Portrait of a woman, second page"
          class="slider__slide__image"
        />
        <img
          src="/images/optimized/Sans titre-8.jpg"
          class="slider__slide__background"
        />
      </article>

      <article
        class="slider__slide vw-100 vh-100 d-flex justify-content-center align-items-center"
      >
        <h2 class="slider__slide__title">Monday</h2>
        <img
          src="/images/optimized/Portrait_2.jpg"
          alt="Portrait femme, troisieme page / Portrait of a woman, third page"
          class="slider__slide__image"
        />
        <img
          src="/images/optimized/IMAGE.jpg"
          class="slider__slide__background"
        />
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
      timeout: 500,
    })
    scrollController.toggle(true)
    scrollController.init()

    //init custom canvas controller
    // canvasController = new CanvasController({
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    //   id: 'bg-canvas',
    //   gui: gui,
    // })
    // canvasController.init()
  },
  methods: {
    //adds classes to the appropriate slide element
    goToSlide: function (slideIndex) {
      const slideElements = document.querySelectorAll('.slider .slider__slide')
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

.slider {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  h1,
  h2 {
    font-family: WulkanLight;
    text-transform: uppercase;
    font-weight: 300 !important;
    -moz-font-feature-settings: 'lnum';
    -webkit-font-feature-settings: 'lnum';
    font-feature-settings: 'lnum';
  }
  p {
    font-family: sans-serif;
    text-decoration: underline;
  }
  .slider__slide {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &:nth-of-type(1) {
      z-index: 0;
      background: black;
      h1,
      h2,
      p {
        color: #f20000;
      }

      .slider__slide__number {
        font-size: 165px;
        line-height: 194px;
        z-index: 1;
      }
      .slider__slide__exercice {
        font-size: 165px;
        line-height: 194px;
        z-index: 1;
      }
      .slider__slide__scroll {
        font-size: 14px;
        z-index: 1;
      }
      .slider__slide__image {
        position: absolute;
        left: 180px;
        bottom: 0;
        z-index: 0;
      }
    }
    &:nth-of-type(2) {
      z-index: 1;
      h1,
      h2,
      p {
        color: #fff;
      }
      .slider__slide__title {
        position: absolute;
        z-index: 2;
      }
      .slider__slide__image {
        z-index: 1;
      }
    }
    &:nth-of-type(3) {
      z-index: 2;
      h1,
      h2,
      p {
        color: #fff;
      }
      .slider__slide__title {
        position: absolute;
        z-index: 2;
      }
      .slider__slide__image {
        z-index: 1;
      }
    }
    &.show {
      opacity: 1;
    }
    & > div {
      padding: 40px;
    }
    .slider__slide__title {
      font-size: 165px;
      width: 40vw;
      line-height: 133px;
      z-index: 1;
    }
    .slider__slide__background {
      position: absolute;
      width: 101vw; //100vw causes a white border
      height: 101vh; //100vw causes a white border
      z-index: 0;
    }
  }
}

.debug {
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translate(0, -25%);
  z-index: 3;
}

.dg.ac {
  z-index: 10 !important;
}
</style>

<template>
  <Container id="slider-page">
    <!-- <div v-if="devMode" class="debug">
      <Button class="my-1" @click="onAnimateCanvas">onAnimateCanvas</Button>
    </div> -->
    <TransitionClip class="d-flex justify-content-center align-items-center">
      <Subtitle class="white">👋 Hello Belle Époque! 👋</Subtitle>
    </TransitionClip>
    <Slider />
    <div
      class="ending d-flex flex-column justify-content-center align-items-center"
    >
      <Subtitle class="black">Fin.</Subtitle>
      <Button class="my-1" @click="onRestart">🔁?</Button>
    </div>
  </Container>
</template>

<script>
import config from '~/utils/config'
import ScrollController from '~/classes/controllers/ScrollController'
import GUIManager from '~/classes/managers/GUIManager'

export default {
  data: function () {
    return {
      // devMode: config.devMode.enabled
    }
  },
  mounted: function () {
    //init GUI
    // const gui = new GUIManager(this.DAT)

    //init custom scroll controller
    const scrollController = new ScrollController({
      isMobile: false,
      timeout: 500,
    })
    scrollController.toggle(true)
    scrollController.init()

    //hello Belle Époque ! j'espère que ça va plaire 😇
    const initialDelay = 600
    setTimeout(() => {
      this.toggleTransitionClip(0, true)
      const animationDelay = 1380
      setTimeout(() => {
        this.toggleTransitionClip(0, false)
      }, animationDelay)
    }, initialDelay)
  },
  methods: {
    //toggles classes in the appropriate transition clip element
    /**
     * @param {Number} index
     * @param {Boolean} mode
     */
    toggleTransitionClip: function (index, mode) {
      const transitionClipElements = document.querySelectorAll(
        '.transition-clip'
      )
      transitionClipElements.forEach((clip, i) => {
        if (clip)
          if (i === index) {
            if (mode) {
              clip.classList.remove('transition-out')
              clip.classList.add('transition-in')
            } else {
              clip.classList.add('transition-out')
              clip.classList.remove('transition-in')
            }
          }
      })
    },
    onRestart: function () {
      document.location.reload()
    },
  },
}
</script>

<style scoped lang="scss">
//this is a simple debug menu
//used it for canvas, not used currently
.debug {
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translate(0, -25%);
  z-index: 3;
}

//the following class applies to DAT.GUI parent element
.dg.ac {
  z-index: 10 !important;
}

.ending {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background: #f9d586;
  &.show {
    transition: opacity ease-in-out 1s;
    opacity: 1;
    visibility: visible;
  }
}
</style>

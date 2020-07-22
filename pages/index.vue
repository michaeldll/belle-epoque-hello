<template>
  <Container id="slider-page">
    <!-- <div v-if="devMode" class="debug">
      <Button class="my-1" @click="onAnimateCanvas">onAnimateCanvas</Button>
    </div> -->
    <TransitionClip class="d-flex justify-content-center align-items-center">
      <Subtitle class="white">👋 Hello Purée Maison! 👋</Subtitle>
    </TransitionClip>
    <Slider />
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

    //hello Purée Maison ! j'espère que ça va plaire 😇
    setTimeout(() => {
      this.toggleTransitionClip(0)
      setTimeout(() => {
        this.toggleTransitionClip(0)
      }, 400)
    }, 600)
  },
  methods: {
    //toggles classes in the appropriate transition clip element
    toggleTransitionClip: function (index) {
      const transitionClipElements = document.querySelectorAll(
        '.transition-clip'
      )
      transitionClipElements.forEach((clip, i) => {
        if (clip)
          if (i === index) {
            !clip.classList.contains('in')
              ? clip.classList.add('transition-in')
              : clip.classList.add('transition-out')
          }
      })
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
</style>

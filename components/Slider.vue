<template>
  <Container class="slider">
    <article class="slider__slide">
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
      class="slider__slide d-flex justify-content-center align-items-center"
    >
      <AnimatedLetters>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            M
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            O
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            N
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            D
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            A
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            Y
          </span>
        </div>
      </AnimatedLetters>
      <img
        src="/images/optimized/Portrait_1.jpg"
        alt="Portrait femme, deuxieme page / Portrait of a woman, second page"
        class="slider__slide__image"
      />
      <img
        src="/images/optimized/IMAGE.jpg"
        class="slider__slide__background"
      />
    </article>

    <article
      class="slider__slide d-flex justify-content-center align-items-center"
    >
      <AnimatedLetters>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            M
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            O
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            N
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            D
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            A
          </span>
        </div>
        <div>
          <span class="d-flex justify-content-center align-items-center">
            Y
          </span>
        </div>
      </AnimatedLetters>
      <img
        src="/images/optimized/Portrait_2.jpg"
        alt="Portrait femme, troisieme page / Portrait of a woman, third page"
        class="slider__slide__image"
      />
      <img
        src="/images/optimized/Sans titre-8.jpg"
        class="slider__slide__background"
      />
    </article>
  </Container>
</template>

<script>
import config from '~/utils/config'

//haven't found a way to access this.$data in methods, so this'll do
let currentSlideIndex = 0

export default {
  mounted: function () {
    //init custom event emitter
    window.EM = new this.eventEmitter()
    window.EM.on('customScroll', (scrollIndex) => {
      if (config.devMode) console.log(scrollIndex)
      this.goToSlide(scrollIndex)
    })
  },
  methods: {
    /**
     * @param {Number} nextSlideIndex
     */
    goToSlide: function (nextSlideIndex) {
      //cache all slide elements
      const slideElements = Array.from(
        document.querySelectorAll('.slider .slider__slide')
      )

      //adds classes to the appropriate slide element(s) at the right time
      const toggleTransition = (slideIndex, mode) => {
        const letterDelay = 100
        if (mode) {
          slideElements[slideIndex].classList.add('transition-in')
        } else {
          slideElements[slideIndex].classList.add('transition-out')
        }
        slideElements[slideIndex]
          .querySelectorAll('.animated-letters > div > span')
          .forEach((letter, i) => {
            setTimeout(() => {
              if (mode) {
                letter.classList.add('transition-in')
              } else {
                letter.classList.add('transition-out')
              }
            }, letterDelay * i)
          })
      }

      const slideFromZeroToOne = () => {
        toggleTransition(1, true)
      }

      const slideFromOneToTwo = () => {
        toggleTransition(1, false)
        toggleTransition(2, true)
      }

      const slideFromTwoToZero = () => {
        toggleTransition(2, false)
        const delay = 2000
        setTimeout(() => {
          document.querySelector('.ending').classList.add('show')
        }, delay)
      }

      switch (currentSlideIndex) {
        case 0:
          if (nextSlideIndex === 1) {
            slideFromZeroToOne()
            currentSlideIndex++
          }
          break

        case 1:
          if (nextSlideIndex === 2) {
            slideFromOneToTwo()
            currentSlideIndex++
          }
          break

        case 2:
          if (nextSlideIndex === 0) {
            slideFromTwoToZero()
            currentSlideIndex = 0
          }
          break

        default:
          break
      }
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
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    //first slide
    &:nth-of-type(1) {
      z-index: 0;
      background: black;
      //   transition: transform 2.46s cubic-bezier(0.76, 0, 0.13, 0.99);

      & > div {
        padding: 40px;
      }

      h1,
      h2,
      p {
        color: $red;
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

    //second slide
    &:nth-of-type(2) {
      z-index: 1;
      background: $red;
      transform: translate(0, 151vh) rotate(-26deg);

      &.transition-in {
        transition: transform 2.46s cubic-bezier(0.76, 0, 0.13, 0.99);
        transform: translate(0, 0) rotate(0deg);
        .slider__slide__image {
          transition: transform 2.05s cubic-bezier(0.63, 0, 0.39, 1) 1.05s;
          transform: translate(0, 0);
        }
        .slider__slide__background {
          transition: transform 2.46s cubic-bezier(0.6, 0, 0.39, 1);
          transform: scale(1.71) rotate(0deg);
        }
      }
      &.transition-out {
        transition: transform 1s ease-in-out 3.22s;
        transform: translate(0, -151vh);
        .slider__slide__image {
          transition: transform 3.09 cubic-bezier(0.63, 0, 0.23, 1);
          transform: translate(0, -100vh);
        }
        .slider__slide__background {
          transition: transform 3.22 cubic-bezier(0.67, 0, 0.2, 1);
          transform: scale(3.06) rotate(-71deg);
        }
      }
      .slider__slide__title {
        position: absolute;
        color: $white;
        width: 100%;
        text-align: center;
        z-index: 2;
      }
      .slider__slide__image {
        z-index: 1;
        transform: translate(0, 100vh);
      }
      .slider__slide__background {
        transform: scale(3.06) rotate(-71deg);
      }
    }

    //third slide
    &:nth-of-type(3) {
      z-index: 2;
      background: $red;
      transform: translate(0, 151vh) rotate(-26deg);

      &.transition-in {
        transition: transform 2.46s cubic-bezier(0.76, 0, 0.13, 0.99);
        transform: translate(0, 0) rotate(0deg);
        .slider__slide__image {
          transition: transform 2.05s cubic-bezier(0.63, 0, 0.39, 1) 1.05s;
          transform: translate(0, 0);
        }
        .slider__slide__background {
          transition: transform 2.46s cubic-bezier(0.6, 0, 0.39, 1);
          transform: scale(1.71) rotate(0deg);
        }
      }
      &.transition-out {
        transition: transform 1s ease-in-out 3.22s;
        transform: translate(0, -151vh);
        .slider__slide__image {
          transition: transform 3.09 cubic-bezier(0.63, 0, 0.23, 1);
          transform: translate(0, -100vh);
        }
        .slider__slide__background {
          transition: transform 3.22 cubic-bezier(0.67, 0, 0.2, 1);
          transform: scale(3.06) rotate(-71deg);
        }
      }
      .slider__slide__title {
        position: absolute;
        color: $white;
        width: 100%;
        text-align: center;
        z-index: 2;
      }
      .slider__slide__image {
        z-index: 1;
        transform: translate(0, 100vh);
      }
      .slider__slide__background {
        opacity: 49%;
        transform: scale(3.06) rotate(-71deg);
      }
    }

    .slider__slide__title {
      font-size: 165px;
      width: 40vw;
      line-height: 133px;
      z-index: 1;
    }
    .slider__slide__background {
      position: absolute;
      opacity: 50%;
      width: 100vw;
      height: 100vh;
      z-index: 0;
    }
  }
}
</style>

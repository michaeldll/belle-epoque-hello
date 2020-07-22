<template>
  <Container class="slider">
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
        src="/images/optimized/Sans titre-8.jpg"
        class="slider__slide__background"
      />
    </article>

    <article
      class="slider__slide vw-100 vh-100 d-flex justify-content-center align-items-center"
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
        src="/images/optimized/IMAGE.jpg"
        class="slider__slide__background"
      />
    </article>
  </Container>
</template>

<script>
import config from '~/utils/config'

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
    //adds classes to the appropriate slide element
    goToSlide: function (slideIndex) {
      const slideElements = document.querySelectorAll('.slider .slider__slide')
      slideElements.forEach((slide, i) => {
        if (!slide) return
        else {
          if (i === slideIndex && !slide.classList.contains('transition-in')) {
            //transition in slide
            slide.classList.add('transition-in')
            //transition in text
            slide
              .querySelectorAll('.animated-letters > div > span')
              .forEach((letter, i) => {
                letter.classList.add('transition-in')
              })
            //transition out previous slide
            Array.from(slideElements).find((slide, i) => {
              if (
                i === slideIndex - 1 &&
                slide.classList.contains('transition-in')
              ) {
                slide.classList.add('transition-out')
              }
            })
          }
        }
      })
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

    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    //first slide
    &:nth-of-type(1) {
      z-index: 0;
      background: black;
      transition: transform 2.46s cubic-bezier(0.76, 0, 0.13, 0.99);

      & > div {
        padding: 40px;
      }

      &.show {
        opacity: 1;
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

      &:not(.transition-in) {
        transform: translate(0, 100vh);
        .slider__slide__image {
          transform: translate(0, 100vh);
        }
      }
      &.transition-in {
        transition: transform 2.46s cubic-bezier(0.76, 0, 0.13, 0.99);
        transform: translate(0, 0);
        .slider__slide__image {
          transition: transform 2.05s cubic-bezier(0.63, 0, 0.39, 1) 1.05s;
          transform: translate(0, 0);
        }
      }
      &.transition-out {
        transform: translate(0, -100vh);
        .slider__slide__image {
          transition: transform 2.05s cubic-bezier(0.63, 0, 0.39, 1) 1.05s;
          transform: translate(0, -100vh);
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
      }
    }

    //third slide
    &:nth-of-type(3) {
      z-index: 2;
      &:not(.transition-in) {
        transform: translate(0, 100vh);
        .slider__slide__image {
          transform: translate(0, 100vh);
        }
      }
      &.transition-in {
        transition: transform 2.46s cubic-bezier(0.76, 0, 0.13, 0.99);
        transform: translate(0, 0);
        .slider__slide__image {
          transition: transform 2.05s cubic-bezier(0.63, 0, 0.39, 1) 1.05s;
          transform: translate(0, 0);
        }
      }
      &.transition-out {
        transform: translate(0, -100vh);
        .slider__slide__image {
          transition: transform 2.05s cubic-bezier(0.63, 0, 0.39, 1) 1.05s;
          transform: translate(0, -100vh);
        }
      }
      h1,
      h2,
      p {
        color: #fff;
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
      width: 100.1vw; //100vw causes a white border
      height: 100vh; //100vw causes a white border
      z-index: 0;
    }
  }
}
</style>

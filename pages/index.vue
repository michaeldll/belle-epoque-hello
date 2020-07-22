<template>
  <Container>
    <div class="debug d-flex flex-column">
      <Button class="my-1" @click="onTransitionClick">transition</Button>
      <Button class="my-1" @click="onScrollToTopClick">scroll to top</Button>
      <Button class="my-1" @click="onAnimateTextClick">animate text</Button>
    </div>
    <TransitionClip />
    <Container data-scroll-container>
      <Header data-scroll-section>
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
        <Navigation />
      </Header>
      <main
        data-scroll-section
        class="d-flex justify-content-center align-items-center flex-column"
      >
        <Container
          class="vw-100 vh-50 d-flex justify-content-center align-items-center flex-column"
        >
          <AnimatedLetters />
          <Canvas id="bg" />
        </Container>
        <article data-scroll data-scroll-speed="2">
          <img height="400px" src="~/assets/milou.jpg" />
          <Subtitle class="black">subtitle here</Subtitle>
        </article>
        <section class="d-grid grid-columns-2">
          <article class="px-2">
            <img
              height="400px"
              data-scroll
              data-scroll-speed="1"
              src="~/assets/milou.jpg"
            />
            <Subtitle class="black" data-scroll data-scroll-speed="1"
              >subtitle here</Subtitle
            >
          </article>
          <article class="px-2">
            <img
              height="400px"
              data-scroll
              data-scroll-speed="1"
              src="~/assets/milou.jpg"
            />
            <Subtitle class="black" data-scroll data-scroll-speed="1"
              >subtitle here</Subtitle
            >
          </article>
        </section>
      </main>
      <Footer data-scroll-section>
        <Subtitle class="white">
          developpé par
          <a href="https://michaels.works">Michael de Laborde</a>
        </Subtitle>
      </Footer>
    </Container>
  </Container>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
  mounted: function () {
    this.toggleTransition()
  },
  methods: {
    onTransitionClick: function (e) {
      this.toggleTransition()
    },
    onScrollToTopClick: function (e) {
      this.lmS.scrollTo(document.querySelector('header'))
    },
    onAnimateTextClick: function (e) {
      const letters = document.querySelectorAll('.animated-letters > span')
      const animationLength = 2350
      letters.forEach((letter, i) => {
        if (letter && letter.classList.contains('animate-in')) {
          letter.classList.add('animate-out')
          letter.classList.remove('animate-in')
          //reset
          setTimeout(() => {
            letter.classList.remove('animate-out')
          }, animationLength)
        } else if (letter && !letter.classList.contains('animate-in')) {
          letter.classList.add('animate-in')
          letter.classList.remove('animate-out')
        }
      })
    },
    toggleTransition: function () {
      document.querySelector('.transition-clip').classList.toggle('in')
    },
  },
}
</script>

<style scoped lang="scss">
a {
  color: #fff;
}
.debug {
  position: absolute;
  right: 3%;
  top: 25%;
  transform: translate(0, -25%);
  z-index: 3;
}
main {
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  article {
    margin: 100px 0;
  }
}
</style>

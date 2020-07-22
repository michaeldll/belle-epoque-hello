<template>
  <Container>
    <div class="debug d-flex flex-column">
      <Button @click="onTransitionClick">transition</Button>
      <div class="my-1" />
      <Button @click="onScrollToTopClick">scroll to top</Button>
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
        <Container class="vw-100">
          <h1>title here</h1>
          <Canvas id="bg-anim" />
        </Container>
        <article data-scroll data-scroll-speed="2">
          <img height="400px" src="~/assets/milou.jpg" />
          <Subtitle className="black">subtitle here</Subtitle>
        </article>
        <section class="d-grid grid-columns-2">
          <article class="px-2">
            <img
              height="400px"
              data-scroll
              data-scroll-speed="1"
              src="~/assets/milou.jpg"
            />
            <Subtitle className="black" data-scroll data-scroll-speed="1"
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
            <Subtitle className="black" data-scroll data-scroll-speed="1"
              >subtitle here</Subtitle
            >
          </article>
        </section>
      </main>
      <Footer data-scroll-section>
        <Subtitle className="white">
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
  top: 50%;
  transform: translate(0, -50%);
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

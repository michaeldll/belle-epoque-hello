<template>
  <div id="js-scroll">
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@font-face {
  font-family: Roswell;
  src: url('/fonts/RoswellFourITC.otf') format('opentype');
}

@import '~/scss/utilities';
@import '~/scss/locomotive';

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

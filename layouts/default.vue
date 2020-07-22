<template>
  <div id="js-scroll">
    <Nuxt />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: WulkanLight;
  src: url('/fonts/Wulkan Display Light.otf') format('opentype');
}

@import '~/scss/utilities';

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

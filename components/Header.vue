<template>
  <header class="d-flex justify-content-between align-items-center">
    <slot></slot>
  </header>
</template>

<script>
import Logo from './Logo'
import Navigation from './Navigation'

export default {
  components: { Logo, Navigation },
}
</script>

<style lang="scss" scoped>
@import '~/scss/utilities/_variables';

header {
  z-index: 1;
  padding: 18px 70px;
  width: 100%;
  background: $dark-blue;
}
</style>

<template>
  <footer class="d-flex justify-content-center align-items-center">
    <slot></slot>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/scss/utilities/_variables';

footer {
  padding: 18px 0;
  width: 100%;
  background: $dark-blue;

  h3 {
    font-family: 'Playfair Display', serif;
  }
}
</style>

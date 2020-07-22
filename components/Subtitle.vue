<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'subtitle',
}
</script>

<style scoped lang="scss">
h3 {
  z-index: 2;
  &.white {
    color: #fff;
  }
  &.black {
    color: #000;
  }
}
</style>

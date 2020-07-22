<template>
  <h3 v-bind:class="className">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'subtitle',
  props: ['className'],
}
</script>

<style scoped lang="scss">
h3 {
  &.white {
    color: #fff;
  }
  &.black {
    color: #000;
  }
}
</style>

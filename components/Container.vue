<template>
  <section v-bind:class="className">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'container',
  props: ['className'],
}
</script>

<style scoped lang="scss">
section {
  position: relative;
}
</style>

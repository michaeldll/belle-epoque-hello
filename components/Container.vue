<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'container',
}
</script>

<style scoped lang="scss">
section {
  position: relative;
}
</style>

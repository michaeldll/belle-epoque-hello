<template>
  <canvas v-bind:id="id" />
</template>

<script>
export default {
  name: 'canvas-component',
  props: ['id'],
}
</script>

<style scoped lang="scss">
canvas {
  z-index: -1;
  position: absolute;
}
</style>

<template>
  <canvas v-bind:id="id" />
</template>

<script>
import CanvasController from '~/classes/controllers/CanvasController'

export default {
  name: 'canvas-component',
  props: ['id'],
  mounted: function () {
    const controller = new CanvasController({
      width: window.innerWidth,
      height: 400,
    })
    controller.init()
  },
}
</script>

<style scoped lang="scss">
canvas {
  z-index: -1;
}
</style>

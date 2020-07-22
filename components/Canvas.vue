<template>
  <canvas v-bind:id="id" />
</template>

<script>
import CanvasController from '~/classes/controllers/CanvasController'

export default {
  name: 'canvas-component',
  props: ['id'],
  mounted(){
    const controller = new CanvasController({width: 100, height:100, id=this.$id})
  }
}
</script>

<style scoped lang="scss">
canvas {
  z-index: -1;
  position: absolute;
}
</style>

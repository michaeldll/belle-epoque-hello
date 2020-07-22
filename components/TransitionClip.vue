<template>
  <div class="transition-clip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'transition-clip',
}
</script>

<style scoped lang="scss">
.transition-clip {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  z-index: 2;
  &.transition-in {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 1.38s cubic-bezier(0.62, 0, 0.15, 1);
  }
  &.transition-out {
    display: none;
  }
}
</style>

<template>
  <div class="animated-letters">
    <span>T</span>
  </div>
</template>

<script>
export default {
  name: 'animated-letters',
  props: [],
  mounted: function () {},
}
</script>

<style scoped lang="scss">
.animated-letters {
  font-size: 50px;
  width: 160px;
  height: 60px;
  text-align: center;
  & > span {
    position: absolute;
    bottom: 0;
    opacity: 0;
    transform: rotate3d(1, 1, 0, -90deg);

    &.animate-in {
      transition: transform 2.35s cubic-bezier(0.33, 0, 0, 1),
        opacity 2.35s cubic-bezier(0.33, 0, 0, 1),
        bottom 2.35s cubic-bezier(0.33, 0, 0, 1);

      opacity: 1;
      bottom: 50%;
      transform: rotate3d(1, 1, 0, 0deg);
    }
    &.animate-out {
      transition: transform 2.35s cubic-bezier(0.33, 0, 0, 1),
        opacity 2.35s cubic-bezier(0.33, 0, 0, 1),
        bottom 2.35s cubic-bezier(0.33, 0, 0, 1);

      bottom: 100%;
      opacity: 0;
      transform: rotate3d(1, 1, 0, -90deg);
    }
  }
}
</style>

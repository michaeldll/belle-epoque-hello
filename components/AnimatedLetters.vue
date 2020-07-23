<template>
  <div
    class="animated-letters d-flex justify-content-center align-items-center"
  >
    <!-- use one span wrapped in a div for each letter -->
    <!-- not proud of this this one 🥵 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'animated-letters',
}
</script>

<style scoped lang="scss">
.animated-letters {
  font-size: 50px;
  width: 55vw;
  height: 200px;
  text-align: center;
  position: absolute;
  z-index: 2;
  color: white;

  & > div {
    position: relative;
    width: 14%;
    height: 100%;

    //sorry
    &:nth-of-type(1) {
      margin-right: 20px;
    }
    &:last-of-type {
      margin-left: -20px;
    }

    & > span {
      position: absolute;
      bottom: -200%;
      opacity: 0;
      transform: rotate3d(1, 1, 0, -90deg);
      font-size: 165px;
      line-height: 133px;
      font-family: WulkanLight;
      text-transform: uppercase;
      font-weight: 300;

      &.transition-in {
        transition: transform 2.35s cubic-bezier(0.33, 0, 0, 1) 1.1s,
          opacity 2.35s cubic-bezier(0.33, 0, 0, 1) 1.1s,
          bottom 2.35s cubic-bezier(0.33, 0, 0, 1) 1.1s;

        opacity: 1;
        bottom: 25%;
        transform: rotate3d(1, 1, 0, 0deg);
      }

      &.transition-out {
        transition: transform 2.35s cubic-bezier(0.33, 0, 0, 1),
          opacity 2.35s cubic-bezier(0.33, 0, 0, 1),
          bottom 2.35s cubic-bezier(0.33, 0, 0, 1);

        bottom: 200%;
        opacity: 0;
        transform: rotate3d(1, 1, 0, -90deg);
      }
    }
  }
}
</style>

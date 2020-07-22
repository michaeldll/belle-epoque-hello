<template>
  <button v-on:click="emitClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-component',
  methods: {
    emitClick: function (event) {
      this.$emit('click')
    },
  },
}
</script>

<style scoped lang="scss"></style>

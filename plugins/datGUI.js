import Vue from 'vue'
import * as DAT from 'dat.gui'

Object.defineProperty(Vue.prototype, 'DAT', {
  value: DAT,
})

import Vue from 'vue'
import EventEmitter from 'EventEmitter'

Object.defineProperty(Vue.prototype, 'eventEmitter', {
  value: EventEmitter,
})

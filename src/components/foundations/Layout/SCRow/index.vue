<template>
  <a-row
    :id="id"
    :class="classes"
    :align="align"
    :justify="justify"
    :type="type"
    :gutter="gutter"
  >
    <slot />
  </a-row>
</template>

<script>
import Vue from 'vue'
import { Row } from 'ant-design-vue'

Vue.use(Row)

export default {
  name: 'SCRow',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1
      }
    },
    justify: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: null,
      validator(value) {
        return ['flex'].indexOf(value) !== -1
      }
    },
    gutter: {
      type: [Number, Object, Array],
      default: 0
    }
  },
  computed: {
    classes() {
      return {
        [`${this.className}`]: this.className !== null
      }
    }
  }
}
</script>

<template>
  <div
    :id="id"
    :class="classes"
    :style="styles"
    :type="type"
  />
</template>

<script>
/* eslint-disable no-undefined */

export default {
  name: 'SCSkeleton',
  model: {
    prop: 'activeKey',
    event: 'close'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    height: {
      type: String,
      default: '100px'
    },
    width: {
      type: String,
      default: '100%'
    },
    radius: {
      type: String,
      default: '4px'
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'circle'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      currentKey: this.activeKey
    }
  },
  computed: {
    classes() {
      return {
        'sc-skeleton': true,
        [`sc-skeleton-${this.type}`]: true
      }
    },
    styles() {
      return {
        width: this.width,
        height: this.height,
        borderRadius: this.radius
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

<template>
  <div
    :id="id"
    class="sc-spin"
  >
    <span :class="classes" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SCSpin',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: 'default',
      validator(value) {
        return ['purple', 'yellow', 'red', 'green', 'blue', 'default'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'sc-spin': true,
        [`sc-spin__${this.size}`]: true,
        [`sc-spin__${this.color}`]: true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

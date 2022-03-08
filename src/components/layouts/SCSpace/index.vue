<template>
  <a-space
    :align="align"
    :direction="direction"
    :size="size"
  >
    <slot />
  </a-space>
</template>

<script>
import { Space } from 'ant-design-vue'

export default {
  name: 'SCSpace',
  components: {
    'a-space': Space
  },
  props: {
    align: {
      type: String,
      default: null,
      validator(value) {
        return ['start', 'end', 'center', 'baseline'].indexOf(value) !== -1
      }
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['vertical', 'horizontal'].indexOf(value) !== -1
      }
    },
    size: {
      type: [String, Number],
      default: 'small',
      validator(value) {
        return ['small', 'middle', 'large'].indexOf(value) !== -1 || typeof val === 'number'
      }
    }
  }
}
</script>

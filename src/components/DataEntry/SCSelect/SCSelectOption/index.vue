<template>
  <a-select-option
    :key="key"
    :title="title"
    :value="value"
    :disabled="disabled"
    :class="classes"
  >
    <slot />
  </a-select-option>
</template>

<script>
/* eslint-disable no-undefined */
import { Select } from 'ant-design-vue'

export default {
  name: 'SCselectOption',
  components: {
    'a-select-option': Select.Option
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    key: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Number],
      default: undefined
    },
    class: {
      type: String,
      default: undefined
    }
  },
  computed: {
    classes() {
      return {
        'sc-select-option': true,
        'sc-select-option-disabled': this.disabled,
        [this.class]: !!this.class
      }
    }
  }
}
</script>

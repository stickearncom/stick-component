<template>
  <a-radio-button
    :id="id"
    :class="classes"
    :auto-focus="autoFocus"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :value="value"
    @change="$emit('change', $event)"
  >
    <slot />
  </a-radio-button>
</template>

<script>
/* eslint-disable no-undefined */
import { Radio } from 'ant-design-vue'

export default {
  name: 'SCRadioButton',
  components: {
    'a-radio-button': Radio.Button
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: undefined
    },
    defaultChecked: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Boolean, Array, Object, Number, Function],
      default: undefined
    }
  },
  data() {
    return {
      currentValue: this.checked || this.defaultChecked
    }
  },
  computed: {
    classes() {
      return {
        'sc-radio-button': true
      }
    }
  },
  watch: {
    checked(newVal) {
      this.currentValue = newVal
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

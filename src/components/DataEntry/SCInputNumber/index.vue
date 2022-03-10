<template>
  <a-input-number
    :id="id"
    v-model="value"
    :class="classes"
    :auto-focus="autoFocus"
    :default-value="defaultValue"
    :disabled="disabled"
    :formatter="formatter"
    :max="max"
    :min="min"
    :parser="parser"
    :precision="precision"
    :decimal-separator="decimalSeparator"
    :size="size"
    :step="step"
    @change="$emit('change', $event)"
    @pressEnter="$emit('pressEnter', $event)"
  />
</template>

<script>
/* eslint-disable no-undefined */
import { InputNumber } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default {
  name: 'SCInputNumber',
  components: {
    'a-input-number': InputNumber
  },
  model: {
    prop: 'currentValue',
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
    defaultValue: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    formatter: {
      type: Function,
      default: undefined
    },
    max: {
      type: Number,
      default: undefined
    },
    min: {
      type: Number,
      default: undefined
    },
    parser: {
      type: Function,
      default: undefined
    },
    precision: {
      type: Number,
      default: undefined
    },
    decimalSeparator: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'large', 'default'].indexOf(value) !== -1
      }
    },
    step: {
      type: [String, Number],
      default: 1
    },
    currentValue: {
      type: Number,
      default: undefined
    },
    hasError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: this.currentValue || this.defaultValue
    }
  },
  computed: {
    classes() {
      return {
        'sc-input-number': true,
        'sc-input-number-error': this.hasError,
        'sc-input-number-disabled': this.disabled
      }
    }
  },
  watch: {
    currentValue(newVal) {
      this.value = newVal
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

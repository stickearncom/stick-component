<template>
  <a-input
    :id="id"
    v-model="currentValue"
    :class="classes"
    :addon-after="addonAfter"
    :addon-before="addonBefore"
    :default-value="defaultValue"
    :disabled="disabled"
    :max-length="maxLength"
    :prefix="prefix"
    :size="size"
    :suffix="suffix"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    @change="$emit('change', $event)"
    @pressEnter="$emit('pressEnter', $event)"
  >
    <template slot="addonAfter">
      <slot name="addonAfter" />
    </template>
    <template slot="addonBefore">
      <slot name="addonBefore" />
    </template>
    <template slot="prefix">
      <slot name="prefix" />
    </template>
    <template slot="suffix">
      <slot name="suffix" />
    </template>
  </a-input>
</template>

<script>
/* eslint-disable no-undefined */
import { Input } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default {
  components: {
    'a-input': Input
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    addonAfter: {
      type: String,
      default: undefined
    },
    addonBefore: {
      type: String,
      default: undefined
    },
    defaultValue: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: undefined
    },
    prefix: {
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
    suffix: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value || this.defaultValue || ''
    }
  },
  computed: {
    classes() {
      return {
        'sc-input': true,
        'sc-input-error': this.hasError,
        'sc-input-disabled': this.disabled
      }
    }
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

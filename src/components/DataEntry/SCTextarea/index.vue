<template>
  <a-textarea
    :id="id"
    :v-model="currentValue"
    :class="classes"
    :auto-size="autoSize"
    :default-value="defaultValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :rows="rows"
    :show-count="showCount"
    :max-length="maxLength"
    @change="$emit('change', $event.target.value)"
    @pressEnter="$emit('pressEnter', $event.target.value)"
  />
</template>

<script>
/* eslint-disable no-undefined */
import { Input } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default {
  name: 'SCTextarea',
  components: {
    'a-textarea': Input.TextArea
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    autoSize: {
      type: [Boolean, Object],
      default: false
    },
    defaultValue: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    rows: {
      type: Number,
      default: undefined
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    showCount: {
      type: Boolean,
      default: false
    },
    maxLength: {
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
      currentValue: this.value || this.defaultValue
    }
  },
  computed: {
    classes() {
      return {
        'sc-textarea': true,
        'sc-textarea-error': this.hasError,
        'sc-textarea-show-count': this.showCount,
        'sc-textarea-disabled': this.disabled
      }
    },
    dataCount() {
      return `${this.value?.length ?? 0} / ${this.maxLength || 0}`
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

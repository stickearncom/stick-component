<template>
  <a-textarea
    :id="id"
    :v-model="value"
    :class="classes"
    :auto-size="autoSize"
    :default-value="defaultValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :rows="rows"
    :show-count="showCount"
    :max-length="maxLength"
    @change="$emit('change', $event)"
    @pressEnter="$emit('pressEnter', $event)"
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
    currentValue: {
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
      value: this.currentValue || this.defaultValue
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
  },
  watch: {
    currentValue(newVal) {
      this.value = newVal
    },
    dataCount() {
      this.updatedShowCountValue()
    }
  },
  mounted() {
    this.showCountElement()
  },
  methods: {
    showCountElement() {
      if (this.showCount) {
        const getElementShowCount = document.getElementsByClassName(
          'sc-textarea-show-count'
        )
        const element = document.createElement('div')
        element.classList.add('sc-textarea-data-count')
        element.appendChild(document.createTextNode(this.dataCount))
        if (getElementShowCount.length) {
          if (this.allowClear) {
            this.$el.appendChild(element)
          } else {
            this.$el.parentNode.insertBefore(element, this.$el.nextElementSibling)
          }
        }
      }
    },
    updatedShowCountValue() {
      if (this.showCount) {
        if (this.allowClear) {
          this.$el.getElementsByClassName('sc-textarea-data-count')[0].textContent = this.dataCount
        } else {
          this.$el.nextElementSibling.textContent = this.dataCount
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

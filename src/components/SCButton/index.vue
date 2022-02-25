<template>
  <a-button
    :id="id"
    :class="classes"
    :disabled="disabled"
    :ghost="ghost"
    :html-type="htmlType"
    :loading="loading"
    :shape="shape"
    :size="size"
    :type="type"
    :block="block"
    @click="$emit('click')"
  >
    <slot />
  </a-button>
</template>

<script>
import Vue from 'vue'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@stickearncom/scstyles/main.scss'

Vue.use(Button)

export default {
  name: 'SCButton',
  components: {
    'a-button': Button
  },
  props: {
    id: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    ghost: { type: Boolean, default: false },
    htmlType: { type: String, default: 'button' },
    loading: { type: [Boolean, Number], default: false },
    shape: {
      type: String,
      default: null,
      validator(value) {
        return ['circle', 'round'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'small', 'large'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'dashed', 'text', 'link'].indexOf(value) !== -1
      }
    },
    icon: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    danger: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        'sc-btn': true,
        [`sc-btn-${this.type}`]: true,
        'sc-btn-danger': this.danger,
        'sc-btn-icon': this.icon
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

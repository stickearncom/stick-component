<template>
  <a-tag
    :id="id"
    v-model="currentVisible"
    :class="classes"
    :after-close="afterClose"
    :closable="closable"
    :color="color"
    @close="$emit('close', $event)"
  >
    <i v-if="showIcon" class="icon" :class="`icon-${icon}`" />
    <span v-if="status" class="sc-tag-status__label">{{ status }}</span>
    <slot />
  </a-tag>
</template>

<script>
/* eslint-disable no-undefined */
import { Tag } from 'ant-design-vue'

export default {
  name: 'SCRadio',
  components: {
    'a-tag': Tag
  },
  model: {
    prop: 'visible',
    event: 'close'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    afterClose: {
      type: Function,
      default: undefined
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: undefined
    },
    visible: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'large', 'default'].indexOf(value) !== -1
      }
    },
    status: {
      type: String,
      default: undefined,
      validator(value) {
        return ['success', 'processing', 'error', 'warning', 'default'].indexOf(value) !== -1
      }
    },
    statusIcon: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentVisible: this.visible
    }
  },
  computed: {
    classes() {
      return {
        'sc-tag': true,
        [`sc-tag-${this.size}`]: this.size !== 'default',
        [`sc-tag-${this.status}`]: this.status !== undefined,
        'sc-tag-dashed': this.dashed
      }
    },
    icon() {
      let icon = ''

      switch (true) {
        case this.status === 'success':
          icon = 'check-circle-solid'
          break
        case this.status === 'processing':
          icon = 'sync-solid'
          break
        case this.status === 'error':
          icon = 'times-circle-solid'
          break
        case this.status === 'warning':
          icon = 'exclamation-circle-solid'
          break
        default:
          icon = 'file-blank-solid'
          break
      }

      return icon
    },
    showIcon() {
      return this.statusIcon && this.status
    }
  },
  watch: {
    visible(newVal) {
      this.currentVisible = newVal
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

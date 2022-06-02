<template>
  <div :class="classes">
    <a-popconfirm
      :id="id"
      :title="title"
      :ok-text="okText"
      ok-type="primary"
      :cancel-text="cancelText"
      :disabled="disabled"
      :placement="placement"
      @confirm="$emit('confirm', $event)"
      @cancel="$emit('cancel', $event)"
      @visibleChange="$emit('visibleChange', $event)"
    >
      <a-icon
        slot="icon"
        :type="icon"
        :style="{ color: 'rgba(250, 184, 0, 1)' }"
        theme="filled"
      />
      <slot />
    </a-popconfirm>
  </div>
</template>

<script>
/* eslint-disable no-undefined */
import { Popconfirm, Icon } from 'ant-design-vue'

export default {
  name: 'SCPopConfirm',
  components: {
    'a-popconfirm': Popconfirm,
    'a-icon': Icon
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    cancelText: {
      type: String,
      default: 'No'
    },
    okText: {
      type: String,
      default: 'Yes'
    },
    icon: {
      type: String,
      default: 'warning'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '---'
    },
    placement: {
      type: String,
      default: 'top',
      validator(value) {
        return [
          'top',
          'topRight',
          'topLeft',
          'left',
          'leftTop',
          'leftBottom',
          'right',
          'rightTop',
          'rightBottom',
          'bottom',
          'bottomLeft',
          'bottomRight'
        ].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'sc-popconfirm': true
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

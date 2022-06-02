<template>
  <div :class="classes">
    <a-popconfirm
      :id="id"
      :title="title"
      :ok-text="okText"
      :ok-type="okType"
      :cancel-text="cancelText"
      :disabled="disabled"
      :placement="placement"
      @confirm="$emit('confirm', $event)"
      @cancel="$emit('cancel', $event)"
      @visibleChange="$emit('visibleChange', $event)"
    >
      <SCIcon slot="icon" :type="icon" />
      <slot />
    </a-popconfirm>
  </div>
</template>

<script>
/* eslint-disable no-undefined */
import { Popconfirm } from 'ant-design-vue'
import SCIcon from '@stickearncom/scicon'

export default {
  name: 'SCPopConfirm',
  components: {
    'a-popconfirm': Popconfirm,
    SCIcon
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
    okType: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: 'exclamation-triangle-solid'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: undefined
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

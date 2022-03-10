<template>
  <a-input-search
    :id="id"
    :class="classes"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :loading="loading"
    :disabled="disabled"
    :size="size"
    @search="$emit('search', $event)"
    @pressEnter="$emit('pressEnter', $event)"
  >
    <a-button slot="enterButton">
      <SCIcon type="search-solid" />
    </a-button>
  </a-input-search>
</template>

<script>
/* eslint-disable no-undefined */
import SCIcon from '@stickearncom/scicon'
import { Input, Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default {
  name: 'SCInputSearch',
  components: {
    'a-input-search': Input.Search,
    'a-button': Button,
    SCIcon
  },
  props: {
    id: {
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
    placeholder: {
      type: String,
      default: undefined
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'sc-input-search': true,
        'sc-input-search-disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

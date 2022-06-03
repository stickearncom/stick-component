<template>
  <a-menu-item
    :id="id"
    :class="classes"
    :disabled="disabled"
    :title="title"
  >
    <slot />
  </a-menu-item>
</template>

<script>
/* eslint-disable no-undefined */
import { Menu } from 'ant-design-vue'

export default {
  name: 'SCMenuItem',
  components: {
    'a-menu-item': Menu.Item
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: undefined
    }
  },
  computed: {
    classes() {
      return {
        'sc-menu-item': true,
        'ant-dropdown-menu-item': true
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

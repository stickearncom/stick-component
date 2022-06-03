<template>
  <a-menu
    :id="id"
    :class="classes"
    :default-selected-keys="defaultSelectedKeys"
    :force-sub-menu-render="forceSubMenuRender"
    :inline-indent="inlineIndent"
    :mode="mode"
    :multiple="multiple"
    :open-keys="openKeys"
    :selectable="selectable"
    :selected-keys="selectedKeys"
    :sub-menu-close-delay="subMenuCloseDelay"
    :sub-menu-open-delay="subMenuOpenDelay"
    :theme="theme"
    @click="$emit('click', $event)"
    @deselect="$emit('deselect', $event)"
    @openChange="$emit('openChange', $event)"
    @select="$emit('select', $event)"
  >
    <slot />
  </a-menu>
</template>

<script>
/* eslint-disable no-undefined */
import { Menu } from 'ant-design-vue'

export default {
  name: 'SCMenu',
  components: {
    'a-menu': Menu
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    defaultSelectedKeys: {
      type: String,
      default: undefined
    },
    forceSubMenuRender: {
      type: Boolean,
      default: false
    },
    inlineIndent: {
      type: Number,
      default: 24
    },
    mode: {
      type: String,
      default: 'vertical',
      validator(value) {
        return ['vertical', 'vertical-right', 'horizontal', 'inline'].indexOf(value) !== -1
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    openKeys: {
      type: String,
      default: undefined
    },
    selectable: {
      type: Boolean,
      default: true
    },
    selectedKeys: {
      type: String,
      default: undefined
    },
    subMenuCloseDelay: {
      type: Number,
      default: 0.1
    },
    subMenuOpenDelay: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'light',
      validator(value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'sc-menu': true
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

<template>
  <a-menu
    :id="id"
    v-model="current"
    :class="classes"
    :default-selected-keys="defaultSelectedKeys"
    :force-sub-menu-render="forceSubMenuRender"
    :inline-indent="inlineIndent"
    :mode="mode"
    :multiple="multiple"
    :selectable="selectable"
    :sub-menu-close-delay="subMenuCloseDelay"
    :sub-menu-open-delay="subMenuOpenDelay"
    :theme="theme"
    @click="$emit('click', $event)"
    @deselect="$emit('deselect', $event)"
    @openChange="$emit('openChange', $event)"
  >
    <slot />
    <template v-if="menus.length">
      <template v-for="menu in menus">
        <a-menu-item v-if="menu.type === 'menu'" :key="menu.key" :disabled="menu.disabled">
          <i v-if="menu.icon" class="icon mr-2.5" :class="`icon-${menu.icon}`" />{{ menu.label }}
        </a-menu-item>
        <a-sub-menu
          v-else-if="menu.type === 'sub-menu' || menu.type === 'sub-menu-group'"
          :key="`${menu.key}`"
          popup-class-name="sc-menu-sub"
          @titleClick="$emit('titleClick', $event)"
        >
          <span slot="title">
            <i v-if="menu.icon" class="icon mr-2.5" :class="`icon-${menu.icon}`" />{{ menu.label }}
          </span>
          <template v-if="menu.type === 'sub-menu'">
            <a-menu-item v-for="child in menu.children" :key="child.key">
              {{ child.label }}
            </a-menu-item>
          </template>

          <template v-else>
            <a-menu-item-group v-for="group in menu.children" :key="group.key">
              <span slot="title">
                <i v-if="group.icon" class="icon mr-2.5" :class="`icon-${group.icon}`" />
                {{ group.label }}
              </span>
              <a-menu-item v-for="child in group.children" :key="child.key">
                {{ child.label }}
              </a-menu-item>
            </a-menu-item-group>
          </template>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script>
/* eslint-disable no-undefined */
import { Menu } from 'ant-design-vue'

export default {
  name: 'SCMenu',
  components: {
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item-group': Menu.ItemGroup
  },
  model: {
    prop: 'selectedKeys',
    event: 'select'
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
        return (
          ['vertical', 'vertical-right', 'horizontal', 'inline'].indexOf(
            value
          ) !== -1
        )
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: true
    },
    selectedKeys: {
      type: Array,
      default: () => undefined
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
    },
    menus: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: this.selectedKeys || []
    }
  },
  computed: {
    classes() {
      return {
        'sc-menu': true
      }
    }
  },
  watch: {
    selectedKeys: {
      deep: true,
      handler(newVal) {
        this.current = newVal
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

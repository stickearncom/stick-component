<template>
  <a-tree-select-node
    :id="id"
    :key="key"
    :class="classes"
    :selectable="selectable"
    :checkable="checkable"
    :disable-checkbox="disableCheckbox"
    :disabled="disabled"
    :is-leaf="isLeaf"
    :title="title"
    :value="value"
    :scoped-slots="scopedSlots"
  >
    <template slot="title">
      <slot name="title" />
    </template>
    <slot />
  </a-tree-select-node>
</template>

<script>
/* eslint-disable no-undefined */
import { TreeSelect } from 'ant-design-vue'

export default {
  name: 'SCTreeSelectNode',
  components: {
    'a-tree-select-node': TreeSelect.TreeNode
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    selectable: {
      type: Boolean,
      default: true
    },
    checkable: {
      type: Boolean,
      default: undefined
    },
    disableCheckbox: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLeaf: {
      type: Boolean,
      default: false
    },
    key: {
      type: [String, Number],
      default: undefined
    },
    title: {
      type: String,
      default: '---'
    },
    value: {
      type: String,
      default: undefined
    },
    scopedSlots: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    classes() {
      return {
        'sc-treeselect-node': true
      }
    }
  }
}
</script>

<style>

</style>

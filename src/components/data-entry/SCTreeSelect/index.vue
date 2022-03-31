<template>
  <a-tree-select
    :id="id"
    v-model="currentValue"
    :class="classes"
    :allow-clear="allowClear"
    :default-value="defaultValue"
    :disabled="disabled"
    :dropdown-class-name="`sc-treeselect-dropdown ${ dropdownClassName ? dropdownClassName : '' }`"
    :dropdown-match-select-width="dropdownMatchSelectWidth"
    :dropdown-style="dropdownStyle"
    :filter-tree-node="filterTreeNode"
    :get-popup-container="getPopupContainer"
    :label-in-value="labelInValue"
    :load-data="loadData"
    :max-tag-count="maxTagCount"
    :max-tag-placeholder="maxTagPlaceholder"
    :multiple="treeCheckable ? true: multiple"
    :placeholder="placeholder"
    :search-placeholder="searchPlaceholder"
    :tree-icon="treeIcon"
    :show-checked-strategy="showCheckedStrategy"
    :show-search="showSearch"
    :size="size"
    :tree-checkable="treeCheckable"
    :tree-check-strictly="treeCheckStrictly"
    :tree-data="treeData"
    :replace-fields="replaceFields"
    :tree-data-simple-mode="treeDataSimpleMode"
    :tree-default-expand-all="treeDefaultExpandAll"
    :tree-default-expanded-keys="treeDefaultExpandedKeys"
    :tree-expanded-keys="treeExpandedKeys"
    @change="$emit('change', $event)"
    @search="$emit('search', $event)"
    @select="$emit('select', $event)"
    @treeExpand="$emit('treeExpand', $event)"
  >
    <template slot="maxTagPlaceholder">
      <slot name="maxTagPlaceholder" />
    </template>
    <template slot="placeholder">
      <slot name="placeholder" />
    </template>
    <template slot="searchPlaceholder">
      <slot name="searchPlaceholder" />
    </template>
    <template slot="suffixIcon">
      <slot name="suffixIcon" />
    </template>
    <slot />
  </a-tree-select>
</template>

<script>
/* eslint-disable no-undefined */
import { TreeSelect } from 'ant-design-vue'

export default {
  name: 'SCTreeSelect',
  components: {
    'a-tree-select': TreeSelect
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
    allowClear: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Array],
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dropdownClassName: {
      type: String,
      default: undefined
    },
    dropdownMatchSelectWidth: {
      type: Boolean,
      default: true
    },
    dropdownStyle: {
      type: Object,
      default: undefined
    },
    filterTreeNode: {
      type: Function,
      default: undefined
    },
    getPopupContainer: {
      type: Function,
      default: () => document.body
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    loadData: {
      type: Function,
      default: undefined
    },
    maxTagCount: {
      type: Number,
      default: undefined
    },
    maxTagPlaceholder: {
      type: Function,
      default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: undefined
    },
    searchPlaceholder: {
      type: String,
      default: undefined
    },
    searchValue: {
      type: String,
      default: undefined
    },
    treeIcon: {
      type: Boolean,
      default: false
    },
    showCheckedStrategy: {
      type: String,
      default: undefined
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'large', 'small'].indexOf(value) !== -1
      }
    },
    treeCheckable: {
      type: Boolean,
      default: false
    },
    treeCheckStrictly: {
      type: Boolean,
      default: false
    },
    treeData: {
      type: Array,
      default: () => []
    },
    replaceFields: {
      type: Object,
      default: () => ({
        children:'children', title:'title', key:'key', value: 'value'
      })
    },
    treeDataSimpleMode: {
      type: [Object, Boolean],
      default: false
    },
    treeDefaultExpandAll: {
      type: Boolean,
      default: false
    },
    noTags: {
      type: Boolean,
      default: false
    },
    treeDefaultExpandedKeys: {
      type: Array,
      default: undefined
    },
    treeExpandedKeys: {
      type: Array,
      default: undefined
    },
    treeNodeFilterProp: {
      type: String,
      default: 'value'
    },
    treeNodeLabelProp: {
      type: String,
      default: 'title'
    },
    value: {
      type: [String, Array],
      default: undefined
    }
  },
  data() {
    return {
      currentValue: this.value || this.defaultValue
    }
  },
  computed: {
    classes() {
      return {
        'sc-treeselect': true,
        'sc-treeselect-no-tags': this.noTags
      }
    }
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

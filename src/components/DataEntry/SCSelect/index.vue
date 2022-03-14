<template>
  <a-select
    :id="id"
    v-model="value"
    :class="classes"
    :allow-clear="allowClear"
    :auto-clear-search-value="autoClearSearchValue"
    :auto-focus="autoFocus"
    :default-active-first-option="defaultActiveFirstOption"
    :default-value="defaultValue"
    :disabled="disabled"
    :dropdown-class-name="`sc-select-dropdown ${
      isCheckbox ? 'sc-select-dropdown-checkbox' : ''
    } ${ dropdownClassName ? dropdownClassName : '' }`"
    :dropdown-match-select-width="dropdownMatchSelectWidth"
    :dropdown-style="dropdownStyle"
    :dropdown-menu-style="dropdownMenuStyle"
    :filter-option="filterOption"
    :first-active-value="firstActiveValue"
    :get-popup-container="getPopupContainer"
    :label-in-value="labelInValue"
    :max-tag-count="maxTagCount"
    :max-tag-placeholder="maxTagPlaceholder"
    :max-tag-text-length="maxTagTextLength"
    :mode="mode"
    :not-found-content="notFoundContent"
    :options="options"
    :option-filter-prop="optionFilterProp"
    :option-label-prop="optionLabelProp"
    :placeholder="placeholder"
    :show-search="showSearch"
    :show-arrow="showArrow"
    :size="size"
    :token-separators="tokenSeparators"
    :default-open="defaultOpen"
    :open="open"
    :loading="loading"
    :data-label="labelName"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @deselect="$emit('deselect', $event)"
    @focus="$emit('focus', $event)"
    @inputKeydown="$emit('inputKeydown', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    @popupScroll="$emit('popupScroll', $event)"
    @search="$emit('search', $event)"
    @select="$emit('select', $event)"
    @dropdownVisibleChange="$emit('dropdownVisibleChange', $event)"
  >
    <template slot="placeholder">
      <slot name="placeholder" />
    </template>
    <template slot="suffixIcon">
      <slot name="suffixIcon" />
    </template>
    <template slot="removeIcon">
      <slot name="removeIcon" />
    </template>
    <template slot="clearIcon">
      <slot name="clearIcon" />
    </template>
    <template slot="menuItemSelectedIcon">
      <slot name="menuItemSelectedIcon" />
    </template>
    <slot />
  </a-select>
</template>

<script>
/* eslint-disable no-undefined */
import { Select } from 'ant-design-vue'

export default {
  name: 'SCselect',
  components: {
    'a-select': Select
  },
  model: {
    prop: 'currentValue',
    event: ['change', 'select']
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
    autoClearSearchValue: {
      type: Boolean,
      default: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: [String, Number, Array],
      default: undefined
    },
    disabled: {
      type: Boolean,
      deafult: false
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
    dropdownMenuStyle: {
      type: Object,
      default: undefined
    },
    filterOption: {
      type: [Boolean, Function],
      default: true
    },
    firstActiveValue: {
      type: [String, Array],
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
    maxTagCount: {
      type: Number,
      default: undefined
    },
    maxTagPlaceholder: {
      type: Function,
      default: undefined
    },
    maxTagTextLength: {
      type: Number,
      default: undefined
    },
    mode: {
      type: String,
      default: 'default',
      validator(value) {
        return ['multiple', 'default', 'tags'].indexOf(value) !== -1
      }
    },
    notFoundContent: {
      type: String,
      default: 'Not Found'
    },
    optionFilterProp: {
      type: String,
      default: undefined
    },
    optionLabelProp: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1
      }
    },
    tokenSeparators: {
      type: Array,
      default: undefined
    },
    currentValue: {
      type: [String, Number, Array],
      default: undefined
    },
    options: {
      type: Array,
      default: undefined
    },
    defaultOpen: {
      type: Boolean,
      default: undefined
    },
    open: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    labelName: {
      type: String,
      default: undefined
    },
    isCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: this.currentValue || this.defaultValue
    }
  },
  computed: {
    classes() {
      return {
        'sc-select': true,
        'sc-select-error': this.hasError,
        'sc-select-disabled': this.disabled,
        'sc-select-search': this.showSearch,
        'sc-select-checkbox': this.isCheckbox,
        [`sc-select-${this.mode}`]: true
      }
    }
  },
  watch: {
    currentValue(newVal) {
      this.value = newVal
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

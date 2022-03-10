<template>
  <multiselect
    :id="id"
    v-model="value"
    :class="classes"
    :options="options"
    :multiple="multiple"
    :track-by="trackBy"
    :label="label"
    :searchable="searchable"
    :clear-on-select="clearOnSelect"
    :hide-selected="hideSelected"
    :allow-empty="allowEmpty"
    :reset-after="resetAfter"
    :close-on-select="closeOnSelect"
    :custom-label="customLabel"
    :taggable="taggable"
    :tag-placeholder="tagPlaceholder"
    :tag-position="tagPosition"
    :max="max"
    :options-limit="optionsLimit"
    :group-values="groupValues"
    :group-label="groupLabel"
    :group-select="groupSelect"
    :block-keys="blockKeys"
    :internal-search="internalSearch"
    :preserve-search="preserveSearch"
    :preselect-first="preselectFirst"
    :name="name"
    :select-label="selectLabel"
    :select-group-label="selectGroupLabel"
    :selected-label="selectedLabel"
    :deselect-label="deselectLabel"
    :deselect-group-label="deselectGroupLabel"
    :show-labels="showLabels"
    :limit-text="limitText"
    :loading="loading"
    :disabled="disabled"
    :max-height="maxHeight"
    :open-direction="openDirection"
    :show-no-results="showNoResults"
    :tabindex="tabindex"
    :show-pointer="showPointer"
    :option-height="optionHeight"
    @input="$emit('input', $event)"
    @select="$emit('select', $event)"
    @remove="$emit('remove', $event)"
    @search-change="$emit('searchChange', $event)"
    @tag="$emit('tag', $event)"
    @open="$emit('open', $event)"
    @close="$emit('close', $event)"
  >
    <template slot="singleLabel" slot-scope="props">
      <slot :props="props" name="singleLabel" />
    </template>
    <template slot="option" slot-scope="props">
      <slot :slot-scope="props" name="option" />
    </template>
    <template slot="maxElements">
      <slot name="maxElements" />
    </template>
    <template slot="noResult">
      <slot name="noResult" />
    </template>
    <template slot="noOptions">
      <slot name="noOptions" />
    </template>
    <template slot="beforeList">
      <slot name="beforeList" />
    </template>
    <template slot="afterList">
      <slot name="afterList" />
    </template>
    <template slot="caret" slot-scope="props">
      <slot :slot-scope="props" name="caret" />
    </template>
    <template slot="singleLabel">
      <slot name="singleLabel" />
    </template>
    <template slot="placeholder">
      <slot name="placeholder" />
    </template>
    <template slot="limit">
      <slot name="limit" />
    </template>
    <template slot="clear" slot-scope="props">
      <slot :slot-scope="props" name="clear" />
    </template>
    <template slot="tag" slot-scope="props">
      <slot :slot-scope="props" name="tag" />
    </template>
  </multiselect>
</template>

<script>
/* eslint-disable no-undefined */
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  name: 'SCMultiSelect',
  components: {
    Multiselect
  },
  model: {
    prop: 'currentValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    options: {
      type: Array,
      default: undefined
    },
    currentValue: {
      type: [Object, Array, String, Number],
      default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    trackBy: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    searchable: {
      type: Boolean,
      default: true
    },
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    hideSelected: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select option'
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    resetAfter: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    customLabel: {
      type: Function,
      default: undefined
    },
    taggable: {
      type: Boolean,
      default: false
    },
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    tagPosition: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom'].indexOf(value) !== -1
      }
    },
    max: {
      type: Number,
      default: undefined
    },
    optionsLimit: {
      type: Number,
      default: 1000
    },
    groupValues: {
      type: String,
      default: undefined
    },
    groupLabel: {
      type: String,
      default: undefined
    },
    groupSelect: {
      type: Boolean,
      default: false
    },
    blockKeys: {
      type: Array,
      default: () => []
    },
    internalSearch: {
      type: Boolean,
      default: true
    },
    preserveSearch: {
      type: Boolean,
      default: false
    },
    preselectFirst: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    showLabels: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 99999
    },
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    openDirection: {
      type: String,
      default: undefined,
      validator(value) {
        return ['above', 'top', 'below', 'bottom'].indexOf(value) !== -1
      }
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1
      }
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
        'sc-multiselect': true,
        [`sc-multiselect-${this.size}`]: true,
        'sc-multiselect-disabled': this.disabled
      }
    }
  },
  watch: {
    currentValue(newVal) {
      this.value = newVal
    }
  },
  methods: {
    handleSlot(value) {
      console.log('first', value)
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

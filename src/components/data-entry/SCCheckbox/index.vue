<template>
  <a-checkbox
    :id="id"
    v-model="currentValue"
    :class="classes"
    :auto-focus="autoFocus"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :indeterminate="indeterminate"
    @change="$emit('change', $event.target.checked)"
  >
    <slot />
  </a-checkbox>
</template>

<script>
/* eslint-disable no-undefined */
import { Checkbox } from 'ant-design-vue'

export default {
  name: 'SCCheckbox',
  components: {
    'a-checkbox': Checkbox
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.checked || this.defaultChecked
    }
  },
  computed: {
    classes() {
      return {
        'sc-checkbox': true,
        'sc-checkbox-disabled': this.disabled
      }
    }
  },
  watch: {
    checked(newVal) {
      this.currentValue = newVal
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

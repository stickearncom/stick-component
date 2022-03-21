<template>
  <a-checkbox-group
    :id="id"
    v-model="currentValue"
    :class="classes"
    :default-value="defaultValue"
    :disabled="disabled"
    :name="name"
    :options="options"
    @change="$emit('change', $event)"
  >
    <slot />
  </a-checkbox-group>
</template>

<script>
/* eslint-disable no-undefined */
import { Checkbox } from 'ant-design-vue'

export default {
  name: 'SCCheckboxGroup',
  components: {
    'a-checkbox-group': Checkbox.Group
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
    defaultValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: undefined
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
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
        'sc-checkbox-group': true,
        'sc-checkbox-group-disabled': this.disabled
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

<template>
  <a-radio-group
    :id="id"
    v-model="currentValue"
    :class="classes"
    :default-value="defaultValue"
    :disabled="disabled"
    :name="name"
    :options="options"
    :size="size"
    :button-style="buttonStyle"
    @change="$emit('change', $event)"
  >
    <slot />
  </a-radio-group>
</template>

<script>
/* eslint-disable no-undefined */
import { Radio } from 'ant-design-vue'

export default {
  name: 'SCRadioGroup',
  components: {
    'a-radio-group': Radio.Group
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
      type: [String, Boolean, Array, Object, Number, Function],
      default: undefined
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
      default: undefined
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'large', 'default'].indexOf(value) !== -1
      }
    },
    value: {
      type: [String, Boolean, Array, Object, Number, Function],
      default: undefined
    },
    buttonStyle: {
      type: String,
      default: 'outline',
      validator(value) {
        return ['outline', 'solid'].indexOf(value) !== -1
      }
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
        'sc-radio-group': true,
        [`sc-radio-group-${this.size}`]: true,
        'sc-radio-group-disabled': this.disabled
      }
    }
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal.target.value
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

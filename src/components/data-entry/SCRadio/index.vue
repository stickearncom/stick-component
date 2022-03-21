<template>
  <a-radio
    :id="id"
    v-model="currentValue"
    :class="classes"
    :auto-focus="autoFocus"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :value="value"
    @change="$emit('change', $event)"
    @click="$emit('click', $event)"
  >
    <template slot="unCheckedChildren">
      <slot name="unCheckedChildren" />
    </template>
    <template slot="checkedChildren">
      <slot name="checkedChildren" />
    </template>
  </a-radio>
</template>

<script>
/* eslint-disable no-undefined */
import { Radio } from 'ant-design-vue'

export default {
  name: 'SCRadio',
  components: {
    'a-radio': Radio
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
      default: undefined
    },
    defaultChecked: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Boolean, Array, Object, Number, Function],
      default: undefined
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
        'sc-radio': true
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

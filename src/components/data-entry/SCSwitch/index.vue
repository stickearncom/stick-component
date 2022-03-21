<template>
  <a-switch
    :id="id"
    v-model="currentValue"
    :class="classes"
    :auto-focus="autoFocus"
    :checked-children="checkedChildren"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :loading="loading"
    :size="size"
    :un-checked-children="unCheckedChildren"
    @change="$emit('change', $event)"
    @click="$emit('click', $event)"
  >
    <template slot="unCheckedChildren">
      <slot name="unCheckedChildren" />
    </template>
    <template slot="checkedChildren">
      <slot name="checkedChildren" />
    </template>
  </a-switch>
</template>

<script>
/* eslint-disable no-undefined */
import { Switch } from 'ant-design-vue'

export default {
  name: 'SCSwitch',
  components: {
    'a-switch': Switch
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
    checkedChildren: {
      type: String,
      default: undefined
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'small'].indexOf(value) !== -1
      }
    },
    unCheckedChildren: {
      type: String,
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
        'sc-switch': true,
        [`sc-switch-${this.size}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>

<template>
  <a-dropdown-button
    :id="id"
    v-modal="show"
    :class="classes"
    :trigger="trigger"
    :disabled="disabled"
    :placement="placement"
    :size="size"
    :type="type"
    @visibleChange="$emit('visibleChange', $event)"
    @click="$emit('click')"
  >
    <slot />
    <template slot="overlay">
      <div class="sc-dropdown__collapse">
        <slot name="overlay" />
      </div>
    </template>
  </a-dropdown-button>
</template>

<script>
/* eslint-disable no-undefined */
import { Dropdown } from 'ant-design-vue'

export default {
  name: 'SCDropdownButton',
  components: {
    'a-dropdown-button': Dropdown.Button
  },
  model: {
    prop: 'visible',
    event: 'visibleChange'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    placement: {
      type: String,
      default: 'bottomLeft',
      validator(value) {
        return ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'small', 'large'].indexOf(value) !== -1
      }
    },
    trigger: {
      type: Array,
      default: () => ['hover']
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'dashed', 'text', 'link'].indexOf(value) !== -1
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.visible || false
    }
  },
  computed: {
    classes() {
      return {
        'sc-dropdown-button': true,
        'sc-dropdown-button__disabled': this.disabled
      }
    }
  },
  watch: {
    visible: {
      deep: true,
      handler(newVal) {
        this.show = newVal
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

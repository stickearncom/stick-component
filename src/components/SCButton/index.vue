<template>
  <a-button
    :id="id"
    :data-testid="id"
    :class="classes"
    :size="size"
    :shape="shape"
    :icon="icon"
    :loading="loading"
    :block="block"
    :html-type="htmlType"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </a-button>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import { computed } from '@vue/composition-api'
import { Button } from 'ant-design-vue'
import '@/styles/main.scss'
import '@/assets/tailwind.css'

Vue.use(Button)

export default {
  props: {
    id: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'accent',
      validator(value) {
        return (
          [
            'primary',
            'secondary',
            'accent',
            'normal',
            'dark',
            'line',
            'error',
            'red',
            'salmon',
            'turquoise',
            'blue',
            'light-blue'
          ].indexOf(value) !== -1
        )
      }
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return ['small', 'large'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: null,
      validator(value) {
        return ['outline'].indexOf(value) !== -1
      }
    },
    shape: {
      type: String,
      default: null,
      validator(value) {
        return ['circle', 'round'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isDimmed: {
      type: Boolean,
      default: false
    },
    htmlType: {
      type: String,
      default: 'button'
    }
  },
  setup(props) {
    const classes = computed(() => ({
      'se-btn': true,
      [`se-btn--${props.color}`]: true,
      [`se-btn--${props.size}`]: true,
      [`se-btn--${props.type}`]: props.type !== null,
      'se-btn--dimmed': props.isDimmed,
      [props.className]: props.className !== null,
      'full-width': props.fullWidth,
      disabled: props.disabled
    }))

    return {
      classes
    }
  }
}
</script>

<style>
</style>

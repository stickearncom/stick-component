<template>
  <a-button type="primary">
    {{ label }}
  </a-button>
</template>

<script>
import Vue from 'vue'
import { Button } from 'ant-design-vue'
import '@/styles/main.scss'
import '@/styles/tailwind.css'

Vue.use(Button)

export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String,
      default: 'medium'
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

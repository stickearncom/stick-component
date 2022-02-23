<template>
  <a-col
    :id="id"
    :flex="flex"
    :offset="offset"
    :order="order"
    :pull="pull"
    :push="push"
    :span="span"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="sm"
    :xl="sm"
    :xxl="xxl"
  >
    <slot />
  </a-col>
</template>

<script>
/* eslint-disable no-undefined */
import Vue from 'vue'
import { Col } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Col)

export default {
  name: 'SECol',
  props: {
    id: {
      type: String,
      default: null
    },
    flex: {
      type: [String, Number],
      default: null
    },
    offset: {
      type: Number,
      default: 0
    },
    order: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    span: {
      type: Number,
      default: undefined
    },
    xs: {
      type: [Number, Object],
      default: undefined
    },
    sm: {
      type: [Number, Object],
      default: undefined
    },
    md: {
      type: [Number, Object],
      default: undefined
    },
    lg: {
      type: [Number, Object],
      default: undefined
    },
    xl: {
      type: [Number, Object],
      default: undefined
    },
    xxl: {
      type: [Number, Object],
      default: undefined
    }
  }
}
</script>

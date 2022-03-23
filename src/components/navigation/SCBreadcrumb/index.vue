<template>
  <a-breadcrumb
    :id="id"
    :class="classes"
    :params="params"
    :routes="routes"
    :separator="separator"
    @change="$emit('change', $event)"
  >
    <template slot="itemRender" slot-scope="props">
      <slot
        name="itemRender"
        :route="props.route"
        :params="props.params"
        :routes="props.routes"
        :paths="props.paths"
      />
    </template>
    <template slot="separator">
      <slot name="separator" />
    </template>
    <slot />
  </a-breadcrumb>
</template>

<script>
/* eslint-disable no-undefined */
import { Breadcrumb } from 'ant-design-vue'

export default {
  name: 'SCBreadcrumb',
  components: {
    'a-breadcrumb': Breadcrumb
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    routes: {
      type: Array,
      default: undefined
    },
    params: {
      type: Object,
      default: undefined
    },
    separator: {
      type: String,
      default: undefined
    }
  },
  computed: {
    classes() {
      return {
        'sc-breadcrumb': true
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

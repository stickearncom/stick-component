<script src="https://unpkg.com/vue-router@4"></script>

<template>
  <div :id="id" :class="classes">
    <ul class="sc-breadcrumb__container">
      <li
        v-for="(route, index) in routes"
        :key="index"
        class="sc-breadcrumb__item"
        :class="route.active ? 'active' : null"
      >
        <router-link
          :to="`${route.path}`"
        >
          {{ route.label }}
        </router-link>

        <span v-if="routes.length - 1 !== index" class="sc-breadcrumb__separator">
          <i class="icon icon-angle-right" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable no-undefined */

export default {
  name: 'SCBreadcrumb',
  props: {
    id: {
      type: String,
      default: undefined
    },
    routes: {
      type: Array,
      default: () => []
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
        'sc-breadcrumb': true
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
@import "./styles.scss";
</style>

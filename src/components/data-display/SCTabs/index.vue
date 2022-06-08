<template>
  <div :class="classes">
    <ul class="sc-tabs__list">
      <li v-for="option in options" :key="option.key" class="sc-tabs__item">
        <a
          :class="currentKey === option.key ? 'active' : null"
          @click="handleClick(option)"
        >
          <SCIcon v-if="iconType" :type="iconType" />
          {{ option.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable no-undefined */
import SCIcon from '@stickearncom/scicon'

export default {
  name: 'SCTabs',
  components: {
    SCIcon
  },
  model: {
    prop: 'activeKey',
    event: 'close'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    activeKey: {
      type: String,
      default: undefined
    },
    iconType: {
      type: String,
      default: undefined
    },
    animated: {
      type: Boolean,
      default: true
    },
    defaultActiveKey: {
      type: String,
      default: undefined
    },
    hideAdd: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'large', 'default'].indexOf(value) !== -1
      }
    },
    tabBarStyle: {
      type: Object,
      default: () => null
    },
    tabPosition: {
      type: String,
      default: 'bottom',
      validator(value) {
        return ['top', 'right', 'bottom', 'left'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: 'line',
      validator(value) {
        return ['line', 'card', 'editable-card'].indexOf(value) !== -1
      }
    },
    tabBarGutter: {
      type: Number,
      default: undefined
    },
    options: {
      type: Array,
      default: () => [],
      require
    }
  },
  data() {
    return {
      currentKey: this.activeKey
    }
  },
  computed: {
    classes() {
      return {
        'sc-tabs': true,
        [`sc-tabs-${this.size}`]: this.size !== 'default',
        [`sc-tabs-${this.tabPosition}`]: this.tabPosition !== 'bottom'
      }
    }
  },
  watch: {
    activeKey(newVal) {
      this.currentKey = newVal
    },
    defaultActiveKey(newVal) {
      this.currentKey = newVal
    }
  },
  methods: {
    handleClick(value) {
      this.currentKey = value.key
      this.$emit('change', value.key)
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

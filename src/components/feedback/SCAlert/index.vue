<template>
  <div
    :id="id"
    :class="classes"
  >
    <a-alert
      :show-icon="showIcon"
      :message="text"
      :type="type"
      :description="description"
      :banner="banner"
      :closable="closable"
      @close="$emit('close')"
    >
      <template #icon>
        <a-icon v-if="type === 'error'" type="close-circle" theme="filled" />
        <a-icon v-else-if="type === 'info'" type="info-circle" theme="filled" />
        <a-icon v-else-if="type === 'success'" type="check-circle" theme="filled" />
      </template>
    </a-alert>
  </div>
</template>

<script>
import { Alert, Icon } from 'ant-design-vue'

export default {
  name: 'SCAlert',
  emits: ['close'],
  components: {
    'a-alert': Alert,
    'a-icon': Icon
  },
  props: {
    id: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'info', 'error'].indexOf(value) !== -1
      }
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    banner: {
      type: Boolean,
      default: false
    },
    closable:  {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'sc-alert': true
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

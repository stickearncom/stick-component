<template>
  <div
    :id="id"
    class="sc-alert"
    :class="className"
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
        <i v-if="type === 'error'" class="icon-exclamation-circle-solid" />
        <i v-else-if="type === 'info'" class="icon-info-circle-solid" />
        <i v-else-if="type === 'success'" class="icon-check-circle-solid" />
      </template>
    </a-alert>
  </div>
</template>

<script>
import { Alert } from 'ant-design-vue'

export default {
  name: 'SCAlert',
  emits: ['close'],
  components: {
    'a-alert': Alert
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
    className: {
      type: String,
      default: null
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
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>

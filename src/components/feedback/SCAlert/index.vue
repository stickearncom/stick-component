<template>
  <a-alert
    :id="id"
    :class="classes"
    :show-icon="banner ? banner : showIcon"
    :message="text"
    :type="type"
    :description="description"
    :banner="banner"
    :closable="closable"
    @close="$emit('close')"
  >
    <template #icon>
      <i v-if="type === 'error'" class="icon icon-times-circle-solid" />
      <i v-else-if="type === 'info'" class="icon icon-check-circle-solid" />
      <i v-else-if="type === 'success'" class="icon icon-info-circle-solid" />
    </template>
  </a-alert>
</template>

<script>
import { Alert } from 'ant-design-vue'

export default {
  name: 'SCAlert',
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
    type: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'info', 'error'].indexOf(value) !== -1
      }
    },
    showIcon: {
      type: Boolean,
      default: false
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

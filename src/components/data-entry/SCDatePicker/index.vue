<template>
  <a-date-picker :id="id" />
</template>

<script>
/* eslint-disable no-undefined */
import { DatePicker } from 'ant-design-vue'

export default {
  name: 'SCDatePicker',
  components: {
    'a-date-picker': DatePicker
  },
  props: {
    id: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style>

</style>

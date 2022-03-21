<template>
  <div>
    <h4 class="font-medium-lg">
      Input basic:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="9">
        <SCInput v-model="value" placeholder="Input basic" allow-clear />
      </SCCol>
      <SCCol :span="9">
        <SCInput v-model="value" placeholder="Input disabled" disabled />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'

import SCInput from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value(val) {
      console.log({ val })
    }
  }
}
</script>

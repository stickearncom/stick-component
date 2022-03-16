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
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

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

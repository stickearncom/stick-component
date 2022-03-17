<template>
  <div>
    <h4 class="font-medium-lg">
      Textarea basic:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="12">
        <SCTextarea v-model="value" placeholder="Basic usage" />
        <div style="margin: 24px 0" />
        <SCTextarea
          v-model="value"
          placeholder="Allow clear"
          allow-clear
          :rows="4"
        />
      </SCCol>
      <SCCol :span="12">
        <SCTextarea placeholder="Textarea disabled" disabled />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCTextarea from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCTextarea
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

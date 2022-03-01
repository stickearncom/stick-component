<template>
  <div>
    <h4 class="font-medium-lg">
      Input Size:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput
          class="mb-3"
          placeholder="Input small"
          size="small"
          allow-clear
        />
        <SCInput placeholder="Input small disabled" size="small" disabled />
      </SCCol>
      <SCCol :span="8">
        <SCInput class="mb-3" placeholder="Input default" allow-clear />
        <SCInput placeholder="Input default disabled" disabled />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          class="mb-3"
          placeholder="Input large"
          size="large"
          allow-clear
        />
        <SCInput placeholder="Input large disabled" size="large" disabled />
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
  }
}
</script>

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
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'

import SCInput from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput
  }
}
</script>

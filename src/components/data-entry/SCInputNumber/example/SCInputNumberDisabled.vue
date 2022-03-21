<template>
  <div>
    <h4 class="font-medium-lg">
      Input number disabled:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="large"
          :min="1"
          :max="100000"
          disabled
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          :min="1"
          :max="100000"
          disabled
        />
      </SCCol>
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          size="small"
          :min="1"
          :max="100000"
          disabled
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'

import SCInputNumber from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInputNumber
  }
}
</script>

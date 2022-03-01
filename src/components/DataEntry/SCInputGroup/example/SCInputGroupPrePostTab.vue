<template>
  <div>
    <h4 class="font-medium-lg">
      Input group pre / post tab:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="9">
        <SCInputGroup addon-before="Http://" addon-after=".com" default-value="mysite" />
      </SCCol>
      <SCCol :span="9">
        <SCInputGroup placeholder="Input disabled" disabled />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCInputGroup from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInputGroup
  }
}
</script>

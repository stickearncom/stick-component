<template>
  <div>
    <SCRow type="flex" :gutter="16">
      <SCCol :flex="1">
        <SCButton>
          Default
        </SCButton>
      </SCCol>
      <SCCol :flex="1">
        <SCButton loading>
          Default Loading
        </SCButton>
      </SCCol>
      <SCCol :flex="1">
        <SCButton disabled>
          Default Disabled
        </SCButton>
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCButton from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCButton
  }
}
</script>

<style>

</style>

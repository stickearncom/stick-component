<template>
  <div class="grid-demo">
    <SCRow class="demo-row">
      <SCCol :span="24" class="demo-col demo-col-1">
        100%
      </SCCol>
    </SCRow>
    <SCRow class="demo-row">
      <SCCol :span="6" class="demo-col demo-col-2">
        25%
      </SCCol>
      <SCCol :span="6" class="demo-col demo-col-3">
        25%
      </SCCol>
      <SCCol :span="6" class="demo-col demo-col-2">
        25%
      </SCCol>
      <SCCol :span="6" class="demo-col demo-col-3">
        25%
      </SCCol>
    </SCRow>
    <SCRow class="demo-row">
      <SCCol :span="8" class="demo-col demo-col-4">
        33.33%
      </SCCol>
      <SCCol :span="8" class="demo-col demo-col-5">
        33.33%
      </SCCol>
      <SCCol :span="8" class="demo-col demo-col-4">
        33.33%
      </SCCol>
    </SCRow>
    <SCRow class="demo-row">
      <SCCol :span="12" class="demo-col demo-col-1">
        50%
      </SCCol>
      <SCCol :span="12" class="demo-col demo-col-3">
        50%
      </SCCol>
    </SCRow>
    <SCRow class="demo-row">
      <SCCol :span="16" class="demo-col demo-col-4">
        66.66%
      </SCCol>
      <SCCol :span="8" class="demo-col demo-col-5">
        33.33%
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'

export default {
  name: 'DesignConcept',
  components: {
    SCCol,
    SCRow
  }
}
</script>

<style>

</style>

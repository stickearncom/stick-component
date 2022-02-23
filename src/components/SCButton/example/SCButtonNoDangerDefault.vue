<template>
  <div>
    <h4>Button default:</h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow
      type="flex"
      align="center"
      :gutter="[24, 32]"
    >
      <SCCol :span="6">
        Large:
      </SCCol>
      <SCCol :span="6">
        <SCButton size="large">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="6">
        <SCButton loading size="large">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="6">
        <SCButton disabled size="large">
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow
      type="flex"
      justify="center"
      :gutter="[24, 32]"
    >
      <SCCol :span="6">
        Default:
      </SCCol>
      <SCCol :span="6">
        <SCButton>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="6">
        <SCButton loading>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="6">
        <SCButton disabled>
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow
      type="flex"
      align="center"
      :gutter="[24, 32]"
    >
      <SCCol :span="6">
        Small:
      </SCCol>
      <SCCol :span="6">
        <SCButton size="small">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="6">
        <SCButton loading size="small">
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="6">
        <SCButton disabled size="small">
          Button
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

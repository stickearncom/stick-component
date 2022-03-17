<template>
  <div>
    <h4 class="font-medium-lg">
      Button default:
    </h4>
    <hr class="mb-4">
    <!-- Large -->
    <SCRow type="flex" align="middle" :gutter="[16, 32]">
      <SCCol :span="24">
        Large:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="large" class="mb-2">
          Button
        </SCButton>
        <SCButton size="large" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading size="large" class="mb-2">
          Button
        </SCButton>
        <SCButton loading size="large" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled size="large" class="mb-2">
          Button
        </SCButton>
        <SCButton disabled size="large" danger>
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Default -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Default:
      </SCCol>
      <SCCol :span="8">
        <SCButton class="mb-2">
          Button
        </SCButton>
        <SCButton danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading class="mb-2">
          Button
        </SCButton>
        <SCButton loading danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled class="mb-2">
          Button
        </SCButton>
        <SCButton disabled danger>
          Button
        </SCButton>
      </SCCol>
    </SCRow>
    <!-- Small -->
    <SCRow type="flex" align="middle" :gutter="[24, 32]">
      <SCCol :span="24">
        Small:
      </SCCol>
      <SCCol :span="8">
        <SCButton size="small" class="mb-2">
          Button
        </SCButton>
        <SCButton size="small" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton loading size="small" class="mb-2">
          Button
        </SCButton>
        <SCButton loading size="small" danger>
          Button
        </SCButton>
      </SCCol>
      <SCCol :span="8">
        <SCButton disabled size="small" class="mb-2">
          Button
        </SCButton>
        <SCButton disabled size="small" danger>
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

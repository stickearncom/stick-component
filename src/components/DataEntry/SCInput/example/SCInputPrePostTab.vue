<template>
  <div>
    <h4 class="font-medium-lg">
      Input pre / post tab:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="small"
          placeholder="small"
          allow-clear
        />
      </SCCol>
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          allow-clear
        />
      </SCCol>
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="large"
          allow-clear
        />
      </SCCol>
      <SCCol :span="6">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="large"
          disabled
          allow-clear
        />
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

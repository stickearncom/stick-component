<template>
  <div>
    <h4 class="font-medium-lg">
      Input Error:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput placeholder="Input basic" has-error />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          prefix="$"
          placeholder="Input basic"
          has-error
          allow-clear
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          prefix="￥"
          suffix="RMB"
          placeholder="Input basic"
          has-error
          allow-clear
        />
      </SCCol>
    </SCRow>

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="small"
          placeholder="small"
          allow-clear
          has-error
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          allow-clear
          has-error
        />
      </SCCol>
      <SCCol :span="8">
        <SCInput
          addon-before="http://"
          addon-after=".com"
          default-value="mysite"
          size="large"
          allow-clear
          has-error
        />
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

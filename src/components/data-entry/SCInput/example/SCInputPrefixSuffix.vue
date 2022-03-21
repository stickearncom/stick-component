<template>
  <div>
    <h4 class="font-medium-lg">
      Input Prefix & Suffix:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput placeholder="Input basic" prefix="￥" allow-clear />
      </SCCol>
      <SCCol :span="8">
        <SCInput placeholder="Input basic">
          <SCIcon slot="prefix" type="user-circle-solid" />
        </SCInput>
      </SCCol>
      <SCCol :span="8">
        <SCInput prefix="$" placeholder="Input basic" disabled />
      </SCCol>
    </SCRow>

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInput placeholder="Input basic" suffix="RMB" />
      </SCCol>
      <SCCol :span="8">
        <SCInput placeholder="Input basic">
          <SCIcon slot="suffix" type="info-circle-solid" allow-clear />
        </SCInput>
      </SCCol>
      <SCCol :span="8">
        <SCInput prefix="￥" suffix="RMB" placeholder="Input basic" />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'
import SCIcon from '@/components/foundations/SCIcon/index.vue'

import SCInput from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInput,
    SCIcon
  }
}
</script>

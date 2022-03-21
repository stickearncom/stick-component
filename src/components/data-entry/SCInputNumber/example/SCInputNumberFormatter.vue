<template>
  <div>
    <h4 class="font-medium-lg">
      Input number formatter:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="12">
        <SCInputNumber
          :default-value="1000"
          :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="value => value.replace(/\$\s?|(,*)/g, '')"
        />
      </SCCol>
      <SCCol :span="12">
        <SCInputNumber
          :default-value="100"
          :min="0"
          :max="100"
          :formatter="value => `${value}%`"
          :parser="value => value.replace('%', '')"
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

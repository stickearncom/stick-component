<template>
  <div>
    <h4 class="font-medium-lg">
      Input number decimal:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCInputNumber
          :default-value="10"
          :min="1"
          :max="100000"
          :step="0.1"
          @change="onChange"
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCInputNumber from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInputNumber
  },
  methods: {
    onChange(value) {
      console.log('changed', value)
    }
  }
}
</script>

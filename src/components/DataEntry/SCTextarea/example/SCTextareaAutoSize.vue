<template>
  <div>
    <h4 class="font-medium-lg">
      Textarea autosize:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="8">
        <SCTextarea
          placeholder="Autosize height based on content lines"
          auto-size
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </SCCol>
      <SCCol :span="8">
        <SCTextarea
          :value="value"
          placeholder="Autosize height based on content lines"
          auto-size
          :max-length="10"
          show-count
          @change="value = $event"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          :value="value2"
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
          :max-length="10"
          show-count
          allow-clear
          @change="value2 = $event"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          :value="value3"
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          :max-length="10"
          show-count
          allow-clear
          @change="value3 = $event"
        />
      </SCCol>
      <SCCol :span="8">
        <SCTextarea
          placeholder="Autosize height based on content lines"
          auto-size
          :max-length="10"
          show-count
          disabled
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
          :max-length="10"
          show-count
          allow-clear
          disabled
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          :max-length="10"
          show-count
          allow-clear
          disabled
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
import SCRow from '@stickearncom/scrow'
import SCCol from '@stickearncom/sccol'

import SCTextarea from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCTextarea
  },
  data() {
    return {
      value: '',
      value2: '',
      value3: ''
    }
  },
  watch: {
    value2(newVal) {
      console.log({ newVal })
    }
  }
}
</script>

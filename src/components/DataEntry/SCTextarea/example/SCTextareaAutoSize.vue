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
          v-model="value"
          placeholder="Autosize height with minimum and maximum number of lines"
          auto-size
          :max-length="10"
          show-count
          allow-clear
          :data-count="dataCount"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          v-model="value2"
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
          :max-length="10"
          show-count
          allow-clear
          :data-count="dataCount2"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          v-model="value3"
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          :max-length="10"
          show-count
          allow-clear
          :data-count="dataCount3"
        />
      </SCCol>
      <SCCol :span="8">
        <SCTextarea
          placeholder="Autosize height with minimum and maximum number of lines"
          auto-size
          :max-length="10"
          show-count
          allow-clear
          disabled
          :data-count="dataCount2"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 6 }"
          :max-length="10"
          show-count
          allow-clear
          disabled
          :data-count="dataCount2"
        />
        <div style="margin: 24px 0" />
        <SCTextarea
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          :max-length="10"
          show-count
          allow-clear
          disabled
          :data-count="dataCount3"
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
  computed: {
    dataCount() {
      return `${this.value?.length ?? 0} / 10`
    },
    dataCount2() {
      return `${this.value2?.length ?? 0} / 10`
    },
    dataCount3() {
      return `${this.value3?.length ?? 0} / 10`
    }
  }
}
</script>

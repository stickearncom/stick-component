<template>
  <div>
    <h4 class="font-medium-lg">
      Input search basic:
    </h4>
    <hr class="mb-4">

    <SCRow :gutter="[16, 32]">
      <SCCol :span="12">
        <SCInputSearch
          placeholder="Search input"
          allow-clear
          size="large"
          @search="handleSearch"
          @change="handleChange"
          @pressEnter="handlePressEnter"
        />
        <div style="margin: 16px 0" />
        <SCInputSearch
          placeholder="Search input"
          allow-clear
          @search="handleSearch"
          @change="handleChange"
          @pressEnter="handlePressEnter"
        />
        <div style="margin: 16px 0" />
        <SCInputSearch
          placeholder="Search input"
          allow-clear
          size="small"
          @search="handleSearch"
          @change="handleChange"
          @pressEnter="handlePressEnter"
        />
      </SCCol>
      <SCCol :span="12">
        <SCInputSearch
          placeholder="Search input"
          allow-clear
          size="large"
          disabled
        />
        <div style="margin: 16px 0" />
        <SCInputSearch placeholder="Search input" allow-clear disabled />
        <div style="margin: 16px 0" />
        <SCInputSearch
          placeholder="Search input"
          allow-clear
          size="small"
          disabled
        />
      </SCCol>
    </SCRow>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import SCCol from '@/components/foundations/Layout/SCCol/index.vue'
import SCRow from '@/components/foundations/Layout/SCRow/index.vue'

import SCInputSearch from '../index.vue'

export default {
  components: {
    SCRow,
    SCCol,
    SCInputSearch
  },
  methods: {
    handleChange(value) {
      console.log('change', value)
    },
    handleSearch(value) {
      console.log('search', value)
    },
    handlePressEnter(value) {
      console.log('pressEnter', value)
    }
  }
}
</script>
